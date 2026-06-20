# FireSmart Technical Overview

## Architecture (high level)

Edge devices (ESP32 sensors) -> Gateway (MQTT/HTTPS over TLS, GSM fallback) -> Ingress / Broker -> Processing & Rules Service -> Supabase (Postgres + Realtime) -> Dashboard / Notifier

```mermaid
flowchart LR
  Sensor[IoT Sensors (ESP32)]
  Gateway[Gateway / GSM or WiFi]
  Broker[MQTT / Ingress API]
  Processor[Rules & Escalation Service]
  Supabase[Supabase (DB + Realtime)]
  Dashboard[Operator Dashboard / Live Map]
  Notifier[SMS / Email / Push / Webhook]

  Sensor --> Gateway --> Broker --> Processor --> Supabase
  Processor --> Notifier
  Supabase --> Dashboard
  Notifier --> Dashboard
```

## Communication & Protocols
- Device → Gateway: MQTT (preferred) or HTTPS POST. Use TLS for HTTPS; use MQTT over TLS (MQTTS) where possible.
- Topics: `firesmart/<org_id>/devices/<device_id>/telemetry` and `firesmart/<org_id>/devices/<device_id>/events`
- Gateway → Ingress: Broker (e.g., EMQX, Mosquitto) or HTTPS to an API Gateway that forwards to a Processor service.
- Notifications: Use third-party providers (Twilio, AWS SNS, or local SMS gateway) + webhooks for integrations.

## Sample sensor payload (JSON)

```json
{
  "device_id": "esp32-001",
  "timestamp": "2026-06-20T12:34:56Z",
  "gps": {"lat": 14.5995, "lon": 120.9842},
  "sensors": {"smoke": 48, "flame": 0, "temperature": 72.4},
  "battery": 89,
  "status": "ok",
  "firmware": "v1.2.0"
}
```

## Ingress / API (example endpoints)
- `POST /api/v1/ingest` – HTTP ingestion of telemetry (auth: client cert or token)
- MQTT topics for telemetry and control

## Processing & Rules
- Configure threshold rules (per-device, per-site) and edge filtering to reduce false positives.
- Deduplication windows and temporal smoothing: require N-of-M samples within T seconds before escalation, or allow edge prefilter override.

## Data Model (high level)
- `devices` (id, site_id, model, firmware, last_seen)
- `sites` (id, name, address, geo, contacts)
- `telemetry` (device_id, ts, smoke, flame, temp, raw)
- `incidents` (id, site_id, start_ts, end_ts, status, assigned_units, evidence)

## KPIs to monitor
- Detection-to-Alert (median seconds)
- Alert-to-Dispatch (median seconds)
- False Alarm Rate (%)
- Devices Online (%) / Last-seen distribution
- Incident Resolution within SLA (%)

## Security & Privacy
- Use TLS for all transport. Protect broker with client certs or strong JWT tokens.
- Encrypt sensitive PII at rest. Use role-based access control (RBAC) in Supabase.
- Tamper-evident logs: store immutable audit records for incident actions.

## Deployment Notes
- Minimal viable deployment: Supabase project + small processor (Node/Go) for rules + MQTT broker.
- For scale: add horizontal processors, partition telemetry by org/site, use read replicas for analytics.

## Next steps for implementation
1. Define device onboarding flow (QR/device token).  
2. Implement sample ESP32 firmware with MQTT TLS and signed payloads.  
3. Create ingestion API and rules service (serverless or small container).  
4. Wire notifications to local/regional SMS providers for guaranteed delivery.
