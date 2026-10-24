---
theme: ./
layout: cover
title: FHNW Presentation Theme
author: Mathias Petermann
---

# Title

{{ $slidev.configs.author }}&nbsp; <small>&lt;firstname.lastname@fhnw.ch&gt;</small>

University of Applied Sciences and Arts, Northwestern Switzerland

September 3, 2021

---
layout: section
---

# Introduction

---

# Slide with Content

This is a regular content slide with the FHNW theme applied.

- First point with triangle bullet
- Second point with **bold emphasis**
- Third point with more detail
  - Nested item with lighter bullet
  - Another nested item

---

# Code Example

Use code snippets and get highlighting directly:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-unprivileged
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
```

---

# Missing image

<img src="/not-here.png" class="h100 w80">

---
class: compact
---

# Table Example

| ID | Title | Datasource |
| --- | --- | --- |
| TC-01 | Pod Stability | Probes |
| TC-02 | Pod Readiness | Probes |
| TC-03 | Log Pattern Matching | Logs |
| TC-04 | Resource Usage Patterns | Metrics |

---

# Blocks and Quotes

> A functionality oracle is a valid option to verify workloads after configuration changes.

Key takeaways:

- Logs are the most reliable signal for positive verification
- Negative cases can be identified through events and probes
- The implemented oracle is a solid foundation for broader use cases

---
layout: two-cols
layoutClass: left-yellow
---

::left::

# Observability

## Service Discovery


::right::

<img src="/discovery.avif">

---
layout: two-cols-header
layoutClass: left-yellow
---

::left::

# Observability

## Service Discovery


::right::

<img src="/discovery.avif">

---
layout: two-cols-header
---

# Two Columns with Header

Push or pull? The exporter decides.

::left::

### OTLP exporter

- App sends to a Collector or backend
- gRPC on 4317, HTTP on 4318

::right::

### Prometheus exporter

- App exposes `/metrics`
- Prometheus scrapes it like any target

::bottom::

The **console** exporter prints to stdout: the fastest way to check that instrumentation works.

---
layout: two-cols-header
layoutClass: cols-3-2
---

# Column Ratio

`layoutClass: cols-3-2` gives the left column more room. Also available: `cols-2-3`, `cols-2-1`, `cols-1-2`.

::left::

```yaml
service:
  pipelines:
    metrics:
      receivers: [otlp]
      processors: [memory_limiter, batch]
      exporters: [prometheus, debug]
```

::right::

<Callout title="Read it bottom-up">

`service.pipelines` is the wiring; everything above only defines components.

</Callout>

---

# Cards

<div class="grid grid-cols-3 gap-4 mt-6">
<Card label="Lesson 1" title="OpenTelemetry concepts">

Why instrument, the three signals, API vs. SDK

</Card>
<Card label="Lesson 2" title="Auto-instrumentation" type="highlight">

How it injects itself, the Collector pipeline

</Card>
<Card label="Lesson 3" title="Grafana + exercise" type="dark">

Data sources, panels, first dashboard

</Card>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
<Card title="Captured out of the box">

- Inbound and outbound HTTP
- Runtime: heap, GC, threads

</Card>
<Card title="Needs you">

- Business events
- Meaningful attributes

</Card>
</div>

---

# Callouts

<Callout>

A **note** for a neutral remark next to the main content.

</Callout>

<Callout type="warning" title="Pitfall">

Bind to `0.0.0.0` in a container: recent Collector versions default to localhost.

</Callout>

<Callout type="highlight" title="Takeaway">

Every alert is a request for a human's attention. Spend it carefully.

</Callout>

---
layout: end
---

# Questions?


---
layout: section
---

# Appendix
