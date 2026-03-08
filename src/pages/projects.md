---
layout: ../layouts/AboutLayout.astro
title: "Projects"
---

A showcase of my software engineering projects spanning AI/ML, systems programming, and full-stack development.

---

## 🤖 Autonomous Multi-Agent LLM Pipeline

**Tech Stack:** Python, AutoGen, Ollama, Pydantic

A local-first multi-agent AI system that automates knowledge extraction and synthesis.

### Key Achievements

- Developed a multi-agent AI system using Microsoft AutoGen and Python to automate the extraction and synthesis of unstructured notes into Anki flashcards
- Implemented Agentic design patterns (Tool Use, Reflection, Multi-Agent Collaboration) using local LLMs via Ollama, ensuring data privacy and strict output formatting
- Architected a human-in-the-loop approval workflow and integrated external APIs to build an automated, end-to-end knowledge processing Proof of Concept

### Highlights

- **Privacy-First:** All LLM inference runs locally via Ollama
- **Production-Ready:** Strict Pydantic schema validation ensures reliable output
- **Human-in-the-Loop:** Built-in approval workflow for quality control

---

## 🔐 Generative AI Security & Forensics

**Tech Stack:** Python, Stable Diffusion, LoRA, PyTorch

Research project exploring security vulnerabilities in generative AI models.

### Key Achievements

- Developed a membership inference algorithm in Python to detect training data leakage, establishing baseline security metrics for generative AI models
- Optimized high-fidelity image generation by executing data-driven fine-tuning cycles on Stable Diffusion 1.5 using LoRA

### Highlights

- **Security Research:** Novel membership inference techniques for AI model auditing
- **Fine-Tuning Expertise:** Hands-on experience with LoRA and diffusion models
- **Metrics-Driven:** Established quantitative security benchmarks

---

## 🚀 Secure REST API & DevOps CI/CD Pipeline

**Tech Stack:** Node.js, Git, GitHub Actions, Jest, Supertest

A production-ready backend with comprehensive testing and automated deployment.

### Key Achievements

- Increased development process efficiency by automating DevOps CI/CD pipelines via GitHub Actions, reducing deployment risk through matrix testing across multiple environments
- Achieved >80% global test coverage across 5 dedicated test suites using Jest/Supertest, preventing regressions and edge-case failures
- Secured data integrity in a cloud-native architecture by designing JWT authentication, HTTP security headers, and schema validation middleware

### Highlights

- **Enterprise Security:** JWT authentication, security headers, input validation
- **High Test Coverage:** 80%+ coverage with comprehensive test suites
- **CI/CD Excellence:** Fully automated build, test, and deployment pipeline

[View on GitHub](https://github.com/ronketer)

---

## 📸 Stereo Visual SLAM Pipeline

**Tech Stack:** Python, OpenCV, GTSAM, NumPy

A computer vision pipeline for simultaneous localization and mapping from stereo camera input.

### Key Achievements

- Built a Stereo Visual SLAM pipeline in Python to estimate camera poses, processing 2,600+ frames of spatial data using AKAZE/ORB feature tracking and epipolar consistency checks
- Implemented a temporal-stereo matching pipeline applying RANSAC to identify inlier supporters, ensuring accurate camera motion estimation
- Reduced relative translation error by 3x by architecting a windowed Bundle Adjustment system, applying factor-graph optimization via GTSAM to fine-tune trajectory parameters

### Highlights

- **Large-Scale Processing:** Handled 2,600+ frames of stereo image data
- **Performance Optimization:** 3x reduction in translation error via Bundle Adjustment
- **Computer Vision:** AKAZE/ORB features, RANSAC, epipolar geometry

---

## ⚡ Multithreaded MapReduce Framework

**Tech Stack:** C++, pthreads, Linux, Makefiles

A distributed computing framework implementing the classic MapReduce paradigm.

### Key Achievements

- Developed a distributed computing framework in C++ for Linux, orchestrating a 4-stage pipeline (Map, Sort, Shuffle, Reduce) across dynamically configurable concurrent worker threads
- Enforced data integrity and prevented race conditions by using 3 dedicated mutexes, 4 atomic state counters, and a custom condition-variable barrier for phase synchronization
- Validated system resilience and memory safety under high computational load by stress-testing the framework, efficiently managing builds via Makefiles

### Highlights

- **Concurrent Programming:** Thread-safe design with mutexes and atomics
- **Systems Programming:** Low-level C++ on Linux
- **Scalable Architecture:** Configurable worker thread count

---

## 🧵 Preemptive User-Level Threads Library

**Tech Stack:** C++, Linux/Unix, Signals

A custom threading library implementing preemptive scheduling at the user level.

### Key Achievements

- Built a user-level threading library in C++ for Linux, implementing a preemptive round-robin scheduler using virtual timers (SIGVTALRM) to enforce configurable time quantums
- Architected manual context switching and thread execution flows using sigsetjmp and siglongjmp, guarding internal state transitions with signal masking
- Managed low-level memory allocation and isolated execution stacks to prevent stack overflows, coordinating library builds via Makefiles

### Highlights

- **OS Concepts:** Preemptive scheduling, context switching, signal handling
- **Low-Level Programming:** Manual stack management, sigsetjmp/siglongjmp
- **Performance:** Efficient user-space threading with minimal overhead

---

## 📫 Get In Touch

Interested in discussing these projects or potential opportunities? Feel free to reach out!

- **Email:** [ron.j.keter@gmail.com](mailto:ron.j.keter@gmail.com)
- **LinkedIn:** [linkedin.com/in/ronket](https://www.linkedin.com/in/ronket/)
- **GitHub:** [github.com/ronketer](https://github.com/ronketer)
