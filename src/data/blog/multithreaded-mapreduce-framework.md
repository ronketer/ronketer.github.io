---
author: Ron Keter
pubDatetime: 2024-06-01T10:00:00Z
title: "Multithreaded MapReduce Framework"
slug: multithreaded-mapreduce-framework
featured: true
draft: false
tags:
  - cpp
  - systems
  - multithreading
  - linux
  - projects
description: A high-performance distributed computing framework in C++ for Linux, implementing a 4-stage MapReduce pipeline with thread-safe synchronization.
---

## Multithreaded MapReduce Framework

**Technologies:** C++, pthreads, Linux, Makefiles

This project implements a high-performance MapReduce framework demonstrating advanced systems programming concepts.

## Project Overview

MapReduce is a programming model for processing large datasets in parallel. This implementation showcases my expertise in systems programming, multithreading, and concurrent data structures.

## Key Features

### 4-Stage Pipeline Architecture

1. **Map Phase:** Parallel processing of input data
2. **Sort Phase:** Local sorting of intermediate results
3. **Shuffle Phase:** Redistributing data by key
4. **Reduce Phase:** Aggregating results

### Thread-Safe Implementation

- Dynamically configurable concurrent worker threads
- 3 dedicated mutexes for critical section protection
- 4 atomic state counters for lock-free status tracking
- Custom condition-variable barrier for phase synchronization

### System Resilience

- Stress-tested under high computational load
- Validated memory safety and leak-free operation
- Efficient builds coordinated via Makefiles

## Technical Implementation

### Synchronization Strategy

```cpp
// Phase synchronization using condition variables
pthread_mutex_t phase_mutex;
pthread_cond_t phase_complete;
atomic<int> threads_completed;
```

### Thread Pool Management

- Dynamic thread creation and management
- Work distribution across worker threads
- Graceful shutdown handling

## Systems Programming Highlights

- **Memory Management:** Custom allocators and buffer management
- **Concurrency:** Lock-free data structures where possible
- **Performance:** Optimized for throughput and latency
- **Portability:** Standard POSIX threading

## Skills Demonstrated

- Advanced C++ programming
- POSIX threads and synchronization primitives
- Systems-level debugging and profiling
- Build system management with Make
- Performance optimization

---

_This project is part of my portfolio demonstrating expertise in systems programming and parallel computing._
