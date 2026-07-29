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
layout: end
---

# Thank you for your attention

Questions and Feedback

---
layout: section
---

# Appendix
