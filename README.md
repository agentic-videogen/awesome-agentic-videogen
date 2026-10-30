# <img src="docs/logo.svg" alt="Video Rebirth" width="40" height="35" align="top"> Awesome Agentic Video Generation

**Video Generation Meets Agent Harness: A Survey**

Agentic video generation · Agentic world modeling · Recursive self-improvement

[![Project Page](https://img.shields.io/badge/Project-Page-5F38FF)](https://agentic-videogen.github.io/) [![arXiv Paper](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2610.40191) [![GitHub Contribute](https://img.shields.io/badge/GitHub-Contribute-181717?logo=github&logoColor=white)](https://github.com/agentic-videogen/awesome-agentic-videogen/issues/new?template=add-resource.yml) [![Hugging Face](https://img.shields.io/badge/Hugging%20Face-Paper-FFD21E?logo=huggingface&logoColor=FFD21E)](https://arxiv.org/abs/2610.40191)

A living collection of **387 unique papers and resources**, organized around how the agent harness meets video generation in creation, interaction, and model development. The catalogue also includes shared agent capabilities, foundations, and evaluation resources.

This repository hosts the companion bibliography and resource links for the survey.

## News

- **2026-10-30:** Our survey is now available on [arXiv](https://arxiv.org/abs/2610.40191).

- **2026-10-28:** Repository released.

## Contents

- [Agentic Video Generation](#agentic-video-generation)
- [Agentic World Modeling](#agentic-world-modeling)
- [RSI in Video Generation](#rsi-in-video-generation)
- [Agent Design](#agent-design)
- [Foundations & Related Surveys](#foundations-related-surveys)
- [Future Directions](#future-directions)
- [Benchmarks & Evaluation](#benchmarks--evaluation)
- [Contributing](#contributing)
- [Citation](#citation)

## Overview

| Reading path | Central question | Scope |
|:---|:---|:---|
| **Agentic Video Generation** | How does the agent harness organize video creation? | Planning, assets, shot production, editing, and provenance: from a creative brief to a coordinated generation workflow. |
| **Agentic World Modeling** | How does the agent harness support world interaction? | Action conditioned video, semantic control, persistent state, generative rendering, and the evaluation of interactive worlds. |
| **RSI in Video Generation** | How can video generation systems move toward RSI? | Data curation, model training, evaluation, and harness improvement: mechanisms that can strengthen future development procedures. |

The three paths are complementary settings, not capability levels. A resource may appear in multiple paths; the headline count is deduplicated. The development path includes mechanisms relevant to future RSI, rather than certifying that every listed system demonstrates RSI.

## Agentic Video Generation

Planning, assets, shot production, editing, and provenance: from a creative brief to a coordinated generation workflow. **59 resources.**

### Editing and Post-production

- [A Benchmark and Multi-Agent System for Instruction-driven Cinematic Video Compilation](https://arxiv.org/abs/2604.10456) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.10456)

- [Aurora: Unified Video Editing with a Tool-Using Agent](https://arxiv.org/abs/2605.18748) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/yeates/Aurora.svg?style=social&label=Star)](https://github.com/yeates/Aurora) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18748) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://yeates.github.io/Aurora-Page)

- [Crayotter: Traceable Multi-Agent Workflows for Long-Form Video Editing](https://arxiv.org/abs/2606.07636) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/idwts/Crayotter.svg?style=social&label=Star)](https://github.com/idwts/Crayotter) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.07636)

- [CutClaw: Agentic Hours-Long Video Editing via Music Synchronization](https://arxiv.org/abs/2603.29664) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GVCLab/CutClaw.svg?style=social&label=Star)](https://github.com/GVCLab/CutClaw) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.29664)

- [DIRECT: Video Mashup Creation via Hierarchical Multi-Agent Planning and Intent-Guided Editing](https://arxiv.org/abs/2604.04875) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/AK-DREAM/DIRECT.svg?style=social&label=Star)](https://github.com/AK-DREAM/DIRECT) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.04875)

- [ELLMPEG: An Edge-based Agentic LLM Video Processing Tool](https://doi.org/10.1145/3793853.3795760) — **2026 · ACM MMSys 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3793853.3795760)

- [Evolutionary Multi-Agent Collaboration for Real-World Video Face Restoration](https://openaccess.thecvf.com/content/CVPR2026F/html/Tang_Evolutionary_Multi-Agent_Collaboration_for_Real-World_Video_Face_Restoration_CVPRF_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Findings**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026F/html/Tang_Evolutionary_Multi-Agent_Collaboration_for_Real-World_Video_Face_Restoration_CVPRF_2026_paper.html)

- [Thinking on Shots: Consistent Multi-Shot Video Editing with Agentic Reasoning](https://arxiv.org/abs/2608.26809) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/Wucy0519/MMLVE.svg?style=social&label=Star)](https://github.com/Wucy0519/MMLVE) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.26809) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://wucy0519.github.io/MMLVE/)

- [EditDuet: A Multi-Agent System for Video Non-Linear Editing](https://doi.org/10.1145/3721238.3730761) — **2025 · SIGGRAPH 2025: Conference Papers**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3721238.3730761) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mudtriangle.com/editduet)

- [LAVE: LLM-Powered Agent Assistance and Language Augmentation for Video Editing](https://doi.org/10.1145/3640543.3645143) — **2024 · IUI 2024**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3640543.3645143) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.dgp.toronto.edu/~bryanw/lave/)

### Asset Management

- [AgentMV: A State-Guided Multi-Agent Framework for Budget-Aware Music Video Generation](https://arxiv.org/abs/2605.10723) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.10723)

- [GroundShot: Visually Consistent Multi-Shot Long Video Generation via Entity-Grounded Shot Scheduling](https://arxiv.org/abs/2606.20799) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20799)

- [HoloCine: Holistic Generation of Cinematic Multi-Shot Long Video Narratives](https://openaccess.thecvf.com/content/CVPR2026/html/Meng_HoloCine_Holistic_Generation_of_Cinematic_Multi-Shot_Long_Video_Narratives_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/yihao-meng/HoloCine.svg?style=social&label=Star)](https://github.com/yihao-meng/HoloCine) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Meng_HoloCine_Holistic_Generation_of_Cinematic_Multi-Shot_Long_Video_Narratives_CVPR_2026_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://holo-cine.github.io/)

- [MUSE: A Multi-agent Framework for Unconstrained Story Envisioning via Closed-Loop Cognitive Orchestration](https://arxiv.org/abs/2602.03028) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.03028) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://sunwenzhang1996.github.io/MUSE/)

- [MVAgent: Multi-Agent Video Generation via Consistent Condition Construction and Shot-Level Policy Optimization](https://arxiv.org/abs/2609.30609) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.30609)

- [ViMax: Agentic Video Generation](https://arxiv.org/abs/2606.07649) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HKUDS/ViMax.svg?style=social&label=Star)](https://github.com/HKUDS/ViMax) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.07649)

- [AniME: Adaptive Multi-Agent Planning for Long Animation Generation](https://doi.org/10.1145/3757374.3771455) — **2025 · SIGGRAPH Asia 2025: Posters**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3757374.3771455)

- [AutoMV: An Automatic Multi-Agent System for Music Video Generation](https://arxiv.org/abs/2512.12196) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/multimodal-art-projection/AutoMV.svg?style=social&label=Star)](https://github.com/multimodal-art-projection/AutoMV) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.12196)

- [Long Context Tuning for Video Generation](https://arxiv.org/abs/2503.10589) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.10589) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://guoyww.github.io/projects/long-context-video/)

- [MM-StoryAgent: Immersive Narrated Storybook Video Generation with a Multi-Agent Paradigm across Text, Image and Audio](https://arxiv.org/abs/2503.05242) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/X-PLUG/MM_StoryAgent.svg?style=social&label=Star)](https://github.com/X-PLUG/MM_StoryAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.05242)

- [Anim-Director: A Large Multimodal Model Powered Agent for Controllable Animation Video Generation](https://doi.org/10.1145/3680528.3687688) — **2024 · SIGGRAPH Asia 2024: Conference Papers**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/Anim-Director.svg?style=social&label=Star)](https://github.com/HITsz-TMG/Anim-Director/tree/main/Anim-Director) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3680528.3687688)

### Shot Production

- [Authoring for Living Worlds: Tool-Constrained LLM Agents for Executable Multi-Actor Scenarios](https://arxiv.org/abs/2604.10383) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.10383)

- [Beyond End-to-End Video Models: An LLM-Based Multi-Agent System for Educational Video Generation](https://doi.org/10.1145/3770855.3818323) — **2026 · KDD 2026: Applied Data Science, Vol. 2**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3770855.3818323)

- [Code2Video: A Code-centric Paradigm for Educational Video Creation](https://icml.cc/virtual/2026/poster/65050) — **2026 · ICML 2026**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Code2Video.svg?style=social&label=Star)](https://github.com/showlab/Code2Video) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://icml.cc/virtual/2026/poster/65050)

- [Cutscene Agent: An LLM Agent Framework for Automated 3D Cutscene Generation](https://arxiv.org/abs/2604.25318) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.25318)

- [FantasyHSI: Video-Generation-Centric 4D Human Synthesis in Any Scene Through a Graph-Based Multi-Agent Framework](https://doi.org/10.1609/aaai.v40i10.37758) — **2026 · AAAI 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i10.37758)

- [GenMAC: Compositional Text-to-Video Generation with Multi-Agent Collaboration](https://doi.org/10.1609/aaai.v40i7.37418) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Star](https://img.shields.io/github/stars/Karine-Huang/GenMAC.svg?style=social&label=Star)](https://github.com/Karine-Huang/GenMAC) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i7.37418) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://karine-h.github.io/GenMAC/)

- [Lighting-grounded Video Generation with Renderer-based Agent Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Cai_Lighting-grounded_Video_Generation_with_Renderer-based_Agent_Reasoning_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Cai_Lighting-grounded_Video_Generation_with_Renderer-based_Agent_Reasoning_CVPR_2026_paper.html)

- [MoReGen: Multi-Agent Motion-Reasoning Engine for Code-based Text-to-Video Synthesis](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_MoReGen_Multi-Agent_Motion-Reasoning_Engine_for_Code-based_Text-to-Video_Synthesis_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_MoReGen_Multi-Agent_Motion-Reasoning_Engine_for_Code-based_Text-to-Video_Synthesis_CVPR_2026_paper.html)

- [MPRESENTER: Multilingual Agentic System for Paper-to-Video Generation](https://aclanthology.org/2026.findings-acl.805/) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.findings-acl.805/)

- [Presenting a Paper is an Art: Self-Improvement Aesthetic Agents for Academic Presentations](https://proceedings.iclr.cc/paper_files/paper/2026/hash/d848cb2c84f0bba7f1f73cf232734c40-Abstract-Conference.html) — **2026 · ICLR 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/d848cb2c84f0bba7f1f73cf232734c40-Abstract-Conference.html)

- [SCMAPR: Self-Correcting Multi-Agent Prompt Refinement for Complex-Scenario Text-to-Video Generation](https://aclanthology.org/2026.findings-acl.345/) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/HiThink-Research/SCMAPR.svg?style=social&label=Star)](https://github.com/HiThink-Research/SCMAPR) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.findings-acl.345/)

- [TeachMaster: Generative Teaching via Code](https://aclanthology.org/2026.acl-industry.7/) — **2026 · Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 6: Industry Track)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.acl-industry.7/) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.teachmaster.cn/)

- [VideoGen-Agent: Reinforcing Video Generation Agents](https://arxiv.org/abs/2609.24997) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24997) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://andyca111.github.io/VideoGen_Agent/)

- [VISTA: A Test-Time Self-Improving Video Generation Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://g-vista.github.io/)

- [MotionAgent: Fine-grained Controllable Video Generation via Motion Field Agent](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/leoisufa/MotionAgent.svg?style=social&label=Star)](https://github.com/leoisufa/MotionAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html)

- [PhyT2V: LLM-Guided Iterative Self-Refinement for Physics-Grounded Text-to-Video Generation](https://openaccess.thecvf.com/content/CVPR2025/html/Xue_PhyT2V_LLM-Guided_Iterative_Self-Refinement_for_Physics-Grounded_Text-to-Video_Generation_CVPR_2025_paper.html) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/pittisl/PhyT2V.svg?style=social&label=Star)](https://github.com/pittisl/PhyT2V) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2025/html/Xue_PhyT2V_LLM-Guided_Iterative_Self-Refinement_for_Physics-Grounded_Text-to-Video_Generation_CVPR_2025_paper.html)

- [TheoremExplainAgent: Towards Video-based Multimodal Explanations for LLM Theorem Understanding](https://aclanthology.org/2025.acl-long.332/) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/TIGER-AI-Lab/TheoremExplainAgent.svg?style=social&label=Star)](https://github.com/TIGER-AI-Lab/TheoremExplainAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2025.acl-long.332/)

- [Kubrick: Multimodal Agent Collaborations for Synthetic Video Generation](https://arxiv.org/abs/2408.10453) — **2024 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.10453)

### Script and Shot Planning

- [Camera Artist: A Multi-Agent Framework for Cinematic Language Storytelling Video Generation](https://arxiv.org/abs/2604.09195) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.09195)

- [CamPilot: A Multi-Agent Cinematic Assistant for Camera-Controlled Movie Generation](https://arxiv.org/abs/2609.10943) — **2026 · EMNLP REALM Workshop**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.10943)

- [Co-Director: Agentic Generative Video Storytelling](https://arxiv.org/abs/2604.24842) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GoogleCloudPlatform/genmedia-izumi-agent.svg?style=social&label=Star)](https://github.com/GoogleCloudPlatform/genmedia-izumi-agent/tree/main/demos/backend/ads_codirector) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.24842) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://co-director-agent.github.io/)

- [FilMaster: Bridging Cinematic Principles and Generative AI for Automated Film Generation](https://filmaster-ai.github.io/) — **2026 · ICLR 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://filmaster-ai.github.io/) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://filmaster-ai.github.io/)

- [FRAMEWORKERS: A Dynamic Multi-Agent Framework for AI-Generated Video Production](https://arxiv.org/abs/2608.29814) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.29814)

- [MAViS: A Multi-Agent Framework for Long-Sequence Video Storytelling](https://aclanthology.org/2026.eacl-long.101/) — **2026 · Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.eacl-long.101/)

- [Mind-of-Director: Multi-modal Agent-Driven Film Previsualization via Collaborative Decision-Making](https://arxiv.org/abs/2603.14790) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/pharlency/Mind-of-Director.svg?style=social&label=Star)](https://github.com/pharlency/Mind-of-Director) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.14790) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://pharlency.github.io/Mind-of-Director/)

- [One Sentence, One Drama: Personalized Short-Form Drama Generation via Multi-Agent Systems](https://arxiv.org/abs/2605.22144) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.22144)

- [The Script is All You Need: An Agentic Framework for Long-Horizon Dialogue-to-Cinematic Video Generation](https://arxiv.org/abs/2601.17737) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/Tencent/digitalhuman.svg?style=social&label=Star)](https://github.com/Tencent/digitalhuman/tree/main/ScriptAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.17737)

- [AniMaker: Multi-Agent Animated Storytelling with MCTS-Driven Clip Generation](https://animaker-dev.github.io/) — **2025 · SIGGRAPH Asia 2025: Conference Papers**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/Anim-Director.svg?style=social&label=Star)](https://github.com/HITsz-TMG/Anim-Director/tree/main/AniMaker) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://animaker-dev.github.io/)

- [Automated Movie Generation via Multi-Agent CoT Planning](https://arxiv.org/abs/2503.07314) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/showlab/MovieAgent.svg?style=social&label=Star)](https://github.com/showlab/MovieAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.07314) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://weijiawu.github.io/MovieAgent)

- [AutoMV: An Autonomous Agent Framework for Real Estate Marketing Video Generation](https://doi.org/10.1609/aaai.v39i28.35377) — **2025 · AAAI 2025: Demonstration Track**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v39i28.35377)

- [FilmAgent: Automating Virtual Film Production Through a Multi-Agent Collaborative Framework](https://doi.org/10.1145/3681758.3698014) — **2024 · SIGGRAPH Asia 2024: Technical Communications**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3681758.3698014)

### Watermarking and Provenance

- [Content Credentials: C2PA Technical Specification](https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html) — **2026 · Online resource**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html)

- [LVMark: Robust Watermark for Latent Video Diffusion Models](https://doi.org/10.1109/TIFS.2026.3688194) — **2026 · IEEE Transactions on Information Forensics and Security**<br>
  [![Star](https://img.shields.io/github/stars/kuai-lab/TIFS26_lvmark.svg?style=social&label=Star)](https://github.com/kuai-lab/TIFS26_lvmark) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1109/TIFS.2026.3688194)

- [SIGMark: Scalable In-Generation Watermark with Blind Extraction for Video Diffusion](https://proceedings.iclr.cc/paper_files/paper/2026/hash/f3f6f1739b646e0bd20111261ce23adb-Abstract-Conference.html) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/JeremyZhao1998/SIGMark-release.svg?style=social&label=Star)](https://github.com/JeremyZhao1998/SIGMark-release) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/f3f6f1739b646e0bd20111261ce23adb-Abstract-Conference.html)

- [SPDMark: Selective Parameter Displacement for Robust Video Watermarking](https://openaccess.thecvf.com/content/CVPR2026/html/Fares_SPDMark_Selective_Parameter_Displacement_for_Robust_Video_Watermarking_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Fares_SPDMark_Selective_Parameter_Displacement_for_Robust_Video_Watermarking_CVPR_2026_paper.html)

- [RBMark: Robust and blind video watermark in DT CWT domain](https://doi.org/10.1016/j.jvcir.2025.104438) — **2025 · Journal of Visual Communication and Image Representation**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1016/j.jvcir.2025.104438)

- [SepVAMark: Deep Separable Visual-Audio Fusion Watermarking for Source Tracing and Deepfake Detection](https://doi.org/10.1145/3746027.3755783) — **2025 · Proceedings of the 33rd ACM International Conference on Multimedia**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3746027.3755783)

- [VideoShield: Regulating Diffusion-based Video Generation Models via Watermarking](https://proceedings.iclr.cc/paper_files/paper/2025/hash/8227285e32f70e07fa3a247f3a48006d-Abstract-Conference.html) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/hurunyi/VideoShield.svg?style=social&label=Star)](https://github.com/hurunyi/VideoShield) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.iclr.cc/paper_files/paper/2025/hash/8227285e32f70e07fa3a247f3a48006d-Abstract-Conference.html)

## Agentic World Modeling

Action conditioned video, semantic control, persistent state, generative rendering, and the evaluation of interactive worlds. **40 resources.**

### Harness Interventions: Semantics, State, and Feedback

- [ABot-World-0: Infinite Interactive World Rollout on a Single Desktop GPU](https://arxiv.org/abs/2607.19191) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/amap-cvlab/ABot-World.svg?style=social&label=Star)](https://github.com/amap-cvlab/ABot-World) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.19191)

- [Advancing Open-source World Models](https://arxiv.org/abs/2601.20540) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/robbyant/lingbot-world.svg?style=social&label=Star)](https://github.com/robbyant/lingbot-world) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.20540)

- [Infinite Worlds with Versatile Interactions](https://arxiv.org/abs/2607.07534) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/robbyant/lingbot-world-v2.svg?style=social&label=Star)](https://github.com/robbyant/lingbot-world-v2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.07534)

- [SCOPE: Score-Isolated Agentic Optimization for Video World Models](https://arxiv.org/abs/2608.15043) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YuhuaJiang2002/SCOPE.svg?style=social&label=Star)](https://github.com/YuhuaJiang2002/SCOPE) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.15043)

- [VLAW: Iterative Co-Improvement of Vision-Language-Action Policy and World Model](https://arxiv.org/abs/2602.12063) — **2026 · Proceedings of the 43rd International Conference on Machine Learning**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.12063) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://sites.google.com/view/vla-w)

- [WorldPlay: Towards Long-Term Geometric Consistency for Real-Time Interactive World Modeling](https://arxiv.org/abs/2512.14614) — **2026 · Proceedings of the 43rd International Conference on Machine Learning**<br>
  [![Star](https://img.shields.io/github/stars/Tencent-Hunyuan/HY-WorldPlay.svg?style=social&label=Star)](https://github.com/Tencent-Hunyuan/HY-WorldPlay) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.14614) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://3d-models.hunyuan.tencent.com/world/)

- [AdaWorld: Learning Adaptable World Models with Latent Actions](https://proceedings.mlr.press/v267/gao25u.html) — **2025 · Proceedings of the 42nd International Conference on Machine Learning**<br>
  [![Star](https://img.shields.io/github/stars/Little-Podi/AdaWorld.svg?style=social&label=Star)](https://github.com/Little-Podi/AdaWorld) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v267/gao25u.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://adaptable-world-model.github.io/)

- [Diffusion Models Are Real-Time Game Engines](https://arxiv.org/abs/2408.14837) — **2025 · International Conference on Learning Representations**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.14837) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gamengen.github.io/)

- [Empowering World Models with Reflection for Embodied Video Prediction](https://proceedings.mlr.press/v267/chi25b.html) — **2025 · Proceedings of the 42nd International Conference on Machine Learning**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v267/chi25b.html)

- [GameGen-X: Interactive Open-world Game Video Generation](https://arxiv.org/abs/2411.00769) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/GameGen-X/GameGen-X.svg?style=social&label=Star)](https://github.com/GameGen-X/GameGen-X) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.00769) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gamegen-x.github.io/)

- [Genie 3: A New Frontier for World Models](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) — **2025 · Google DeepMind blog**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)

- [Matrix-game 2.0: An open-source real-time and streaming interactive world model](https://arxiv.org/abs/2508.13009) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/SkyworkAI/Matrix-Game.svg?style=social&label=Star)](https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2508.13009) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://matrix-game-v2.github.io)

- [WorldMem: Long-term Consistent World Simulation with Memory](https://arxiv.org/abs/2504.12369) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xizaoqu/WorldMem.svg?style=social&label=Star)](https://github.com/xizaoqu/WorldMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.12369) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://xizaoqu.github.io/worldmem/)

- [Genie: Generative Interactive Environments](https://proceedings.mlr.press/v235/bruce24a.html) — **2024 · Proceedings of the 41st International Conference on Machine Learning**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v235/bruce24a.html)

### Explicit World State and Generative Rendering

- [AgentGarten: Code Worlds for Evolving Agents](https://arxiv.org/abs/2610.12374) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/MirroS-Lab/AgentGarten.svg?style=social&label=Star)](https://github.com/MirroS-Lab/AgentGarten) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2610.12374) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mirros-lab.github.io/agent-garten)

- [Coarse-to-Real: Generative Rendering for Populated Dynamic Scenes](https://arxiv.org/abs/2601.22301) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/GonzaloGNogales/coarse2real.svg?style=social&label=Star)](https://github.com/GonzaloGNogales/coarse2real) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.22301) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gonzalognogales.github.io/coarse2real/)

- [Code Video Model: Conditioning Video Generation on Code](https://doi.org/10.13140/RG.2.2.34014.80961) — **2026 · Technical report,**<br>
  [![Star](https://img.shields.io/github/stars/code-video-model/CodeVideoModel.svg?style=social&label=Star)](https://github.com/code-video-model/CodeVideoModel) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://doi.org/10.13140/RG.2.2.34014.80961) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://code-video-model.github.io/)

- [Code World Model: Coding Agent as World Brain](https://arxiv.org/abs/2608.25927) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/buaacyw/code-world-model.svg?style=social&label=Star)](https://github.com/buaacyw/code-world-model) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.25927) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://buaacyw.github.io/cwm/)

- [EdenLive: Real-Time Generative Rendering from Any Visual Reference](https://assets.vast-eden.ai/assets/edenlive/EdenLive-tech-report.pdf) — **2026 · Technical report, VAST**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://assets.vast-eden.ai/assets/edenlive/EdenLive-tech-report.pdf)

- [Generative World Renderer](https://arxiv.org/abs/2604.02329) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/ShandaAI/AlayaRenderer.svg?style=social&label=Star)](https://github.com/ShandaAI/AlayaRenderer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.02329) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://alaya-studio.github.io/renderer/)

- [Generative World Renderer at the Speed of Play](https://arxiv.org/abs/2607.18703) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AlayaLab/AlayaRenderer-Flash.svg?style=social&label=Star)](https://github.com/AlayaLab/AlayaRenderer-Flash) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.18703) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://alaya-renderer-flash.alayalab.ai/)

- [Magpie: Real-Time World Renderer for Interactive Games](https://arxiv.org/abs/2608.27168) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.27168)

- [Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds](https://arxiv.org/abs/2610.27999) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/SkyworkAI/Matrix-Game.svg?style=social&label=Star)](https://github.com/SkyworkAI/Matrix-Game) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2610.27999) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://matrix-game-v4-0.github.io/page/)

- [Programmable World Model](https://arxiv.org/abs/2609.10540) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.10540) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://alaya-lab.github.io/pwm)

- [Proxy2World: Learning to Generate Worlds From Lightweight Proxies without Seeing Them](https://arxiv.org/abs/2609.35023) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.35023) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dumdumgura.github.io/proxy2world/)

- [RGBX-Next: Towards Realistic Generative Rendering from G-Buffers](https://arxiv.org/abs/2608.13929) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.13929)

- [SolarRenderer: Few-Step Generative Reference Rendering](https://arxiv.org/abs/2610.28630) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Enderfga/SolarRenderer.svg?style=social&label=Star)](https://github.com/Enderfga/SolarRenderer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2610.28630)

- [Streaming Code World Model](https://github.com/TingtingLiao/streaming-code-world-model) — **2026 · GitHub repository**<br>
  [![Star](https://img.shields.io/github/stars/TingtingLiao/streaming-code-world-model.svg?style=social&label=Star)](https://github.com/TingtingLiao/streaming-code-world-model) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://github.com/TingtingLiao/streaming-code-world-model)

- [StreamRender-H3: Interactive Coding Worlds with Real-time Streaming Diffusion Render](https://nvlabs.github.io/Sana/Sol-Engine/StreamRender-H3/) — **2026 · Online resource**<br>
  [![Star](https://img.shields.io/github/stars/NVlabs/Sana.svg?style=social&label=Star)](https://github.com/NVlabs/Sana/tree/sol-engine/models/streamrender_h3) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://nvlabs.github.io/Sana/Sol-Engine/StreamRender-H3/)

- [World Narrative Model for Highly Controllable Video Generation: A Paradigm Shift from Pixel Sampling to Physical World Orchestration](https://arxiv.org/abs/2606.31946) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.31946)

- [Diffusion Renderer: Neural Inverse and Forward Rendering with Video Diffusion Models](https://arxiv.org/abs/2501.18590) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/nv-tlabs/diffusion-renderer.svg?style=social&label=Star)](https://github.com/nv-tlabs/diffusion-renderer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.18590)

### Evaluation in Agentic World Modeling

- [Agentic World Modeling: Foundations, Capabilities, Laws, and Beyond](https://arxiv.org/abs/2604.22748) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/matrix-agent/awesome-agentic-world-modeling.svg?style=social&label=Star)](https://github.com/matrix-agent/awesome-agentic-world-modeling) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.22748)

- [Orbia: Do Generated Videos Form a Consistent 3D World?](https://arxiv.org/abs/2610.20693) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/worldbench/Orbia.svg?style=social&label=Star)](https://github.com/worldbench/Orbia) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2610.20693) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://orbia-bench.github.io/)

- [PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives](https://arxiv.org/abs/2608.13552) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/kxding/PlayWorld.svg?style=social&label=Star)](https://github.com/kxding/PlayWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.13552) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kxding.github.io/project/PlayWorld/)

- [SCOPE: Score-Isolated Agentic Optimization for Video World Models](https://arxiv.org/abs/2608.15043) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YuhuaJiang2002/SCOPE.svg?style=social&label=Star)](https://github.com/YuhuaJiang2002/SCOPE) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.15043)

- [WorldArena: A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models](https://arxiv.org/abs/2602.08971) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.08971) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://world-arena.ai)

- [SIMA 2: A Generalist Embodied Agent for Virtual Worlds](https://arxiv.org/abs/2512.04797) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.04797)

- [WorldScore: A Unified Evaluation Benchmark for World Generation](https://openaccess.thecvf.com/content/ICCV2025/papers/Duan_WorldScore_A_Unified_Evaluation_Benchmark_for_World_Generation_ICCV_2025_paper.pdf) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/haoyi-duan/WorldScore.svg?style=social&label=Star)](https://github.com/haoyi-duan/WorldScore) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/papers/Duan_WorldScore_A_Unified_Evaluation_Benchmark_for_World_Generation_ICCV_2025_paper.pdf) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://haoyi-duan.github.io/WorldScore/)

### From Video Generation Models to Interactive World Models

- [World Action Models are Zero-shot Policies](https://arxiv.org/abs/2602.15922) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.15922) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dreamzero0.github.io/)

- [WorldPlay: Towards Long-Term Geometric Consistency for Real-Time Interactive World Modeling](https://arxiv.org/abs/2512.14614) — **2026 · Proceedings of the 43rd International Conference on Machine Learning**<br>
  [![Star](https://img.shields.io/github/stars/Tencent-Hunyuan/HY-WorldPlay.svg?style=social&label=Star)](https://github.com/Tencent-Hunyuan/HY-WorldPlay) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.14614) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://3d-models.hunyuan.tencent.com/world/)

- [Cosmos World Foundation Model Platform for Physical AI](https://arxiv.org/abs/2501.03575) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/nvidia-cosmos/cosmos-predict1.svg?style=social&label=Star)](https://github.com/nvidia-cosmos/cosmos-predict1) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.03575)

- [Diffusion Models Are Real-Time Game Engines](https://arxiv.org/abs/2408.14837) — **2025 · International Conference on Learning Representations**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.14837) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gamengen.github.io/)

- [WorldMem: Long-term Consistent World Simulation with Memory](https://arxiv.org/abs/2504.12369) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xizaoqu/WorldMem.svg?style=social&label=Star)](https://github.com/xizaoqu/WorldMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.12369) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://xizaoqu.github.io/worldmem/)

- [Genie: Generative Interactive Environments](https://proceedings.mlr.press/v235/bruce24a.html) — **2024 · Proceedings of the 41st International Conference on Machine Learning**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v235/bruce24a.html)

- [Learning Interactive Real-World Simulators](https://openreview.net/forum?id=sFyTZEqmUY) — **2024 · International Conference on Learning Representations**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openreview.net/forum?id=sFyTZEqmUY) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://universal-simulator.github.io)

## RSI in Video Generation

Data curation, model training, evaluation, and harness improvement: mechanisms that can strengthen future development procedures. **134 resources.**

### Agent Harness Improvement

- [A Benchmark and Multi-Agent System for Instruction-driven Cinematic Video Compilation](https://arxiv.org/abs/2604.10456) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.10456)

- [A Versatile Multimodal Agent for Multimedia Content Generation](https://arxiv.org/abs/2601.03250) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.03250)

- [A$^2$RD: Agentic Autoregressive Diffusion for Long Video Consistency](https://arxiv.org/abs/2605.06924) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.06924) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://dxlong2000.github.io/AARD)

- [AgenticGen: Reward-Guided Agentic Video Generation for Advertising](https://arxiv.org/abs/2609.09187) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.09187)

- [Aurora: Unified Video Editing with a Tool-Using Agent](https://arxiv.org/abs/2605.18748) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/yeates/Aurora.svg?style=social&label=Star)](https://github.com/yeates/Aurora) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18748) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://yeates.github.io/Aurora-Page)

- [AVA-Encoder: Towards Agent-Native Video Representation Learning](https://arxiv.org/abs/2608.12313) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HBDYW/AVA-Encoder.svg?style=social&label=Star)](https://github.com/HBDYW/AVA-Encoder) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.12313) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://ava-encoder.github.io/)

- [Beyond Coherence: Benchmarking Professional Editing-Technique Execution in Multi-Shot Audio-Video Generation](https://arxiv.org/abs/2609.08275) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AlibabaResearch/cut-craft-bench.svg?style=social&label=Star)](https://github.com/AlibabaResearch/cut-craft-bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.08275)

- [Beyond Trial-and-Error: Agentic Optimization for Image-to-Video Adherence](https://arxiv.org/abs/2608.12290) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.12290)

- [Bridging Creative Intent and Visual Quality: Creator-Driven Recurrent Video Generation with Agentic Feedback Loops](https://arxiv.org/abs/2606.18591) — **2026 · ICML Workshop on Human-AI Co-Creativity**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.18591)

- [CamPilot: A Multi-Agent Cinematic Assistant for Camera-Controlled Movie Generation](https://arxiv.org/abs/2609.10943) — **2026 · EMNLP REALM Workshop**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.10943)

- [CineForge: Self-Improving Agents for Long-Horizon Video Generation](https://arxiv.org/abs/2608.29621) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.29621)

- [Co-Director: Agentic Generative Video Storytelling](https://arxiv.org/abs/2604.24842) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GoogleCloudPlatform/genmedia-izumi-agent.svg?style=social&label=Star)](https://github.com/GoogleCloudPlatform/genmedia-izumi-agent/tree/main/demos/backend/ads_codirector) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.24842) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://co-director-agent.github.io/)

- [CogenPVG: Cognitive-Enhanced Reflective Multi-Agent Framework for Persuasive Video Generation](https://arxiv.org/abs/2609.25821) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.25821)

- [Crayotter: Learning Long-Horizon Video Editing Agents via Group-Relative Preference Backpropagation](https://arxiv.org/abs/2608.02694) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/idwts/Crayotter.svg?style=social&label=Star)](https://github.com/idwts/Crayotter) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.02694)

- [CutClaw: Agentic Hours-Long Video Editing via Music Synchronization](https://arxiv.org/abs/2603.29664) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GVCLab/CutClaw.svg?style=social&label=Star)](https://github.com/GVCLab/CutClaw) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.29664)

- [Diverse Video Generation with Determinantal Point Process-Guided Policy Optimization](https://arxiv.org/abs/2511.20647) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.20647) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://diverse-video.github.io/)

- [GenMAC: Compositional Text-to-Video Generation with Multi-Agent Collaboration](https://doi.org/10.1609/aaai.v40i7.37418) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Star](https://img.shields.io/github/stars/Karine-Huang/GenMAC.svg?style=social&label=Star)](https://github.com/Karine-Huang/GenMAC) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i7.37418) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://karine-h.github.io/GenMAC/)

- [Identity-Preserving Text-to-Video Generation via Agentic Enhancement and Semantic Repair](https://arxiv.org/abs/2608.20749) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/oceanflowlab/AESR.svg?style=social&label=Star)](https://github.com/oceanflowlab/AESR) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.20749)

- [MVAgent: Multi-Agent Video Generation via Consistent Condition Construction and Shot-Level Policy Optimization](https://arxiv.org/abs/2609.30609) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.30609)

- [NEWTON: Agentic Planning for Physically Grounded Video Generation](https://arxiv.org/abs/2605.18396) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CUTEPKQ/NEWTON.svg?style=social&label=Star)](https://github.com/CUTEPKQ/NEWTON) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18396) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://Newton026.github.io/newton)

- [PhyPrompt: RL-based Prompt Refinement for Physically Plausible Text-to-Video Generation](https://arxiv.org/abs/2603.03505) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.03505)

- [PhysAgent: Reflective Agentic Physics Control for Physically Plausible Video Generation](https://arxiv.org/abs/2607.16355) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/IApple233/PhysAgent.svg?style=social&label=Star)](https://github.com/IApple233/PhysAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.16355) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://iapple233.github.io/PhysAgent)

- [Recommendation as Generation: Unifying Personalized Video Generation and Recommendation at Industrial Scale](https://arxiv.org/abs/2606.25496) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.25496) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://recommendation-as-generation.github.io/)

- [SCMAPR: Self-Correcting Multi-Agent Prompt Refinement for Complex-Scenario Text-to-Video Generation](https://aclanthology.org/2026.findings-acl.345/) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/HiThink-Research/SCMAPR.svg?style=social&label=Star)](https://github.com/HiThink-Research/SCMAPR) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.findings-acl.345/)

- [Self-Correcting Text-to-Video Generation with Misalignment Detection and Localized Refinement](https://arxiv.org/abs/2411.15115) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/daeunni/VideoRepair.svg?style=social&label=Star)](https://github.com/daeunni/VideoRepair) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.15115) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://video-repair.github.io)

- [SkillPE: Creativity-Oriented Cinematic Skill Evolution for Text-to-Video Prompt Engineering](https://arxiv.org/abs/2609.34335) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/Ais0n/SkillPE.svg?style=social&label=Star)](https://github.com/Ais0n/SkillPE) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.34335)

- [SPAgent: Adaptive Task Decomposition and Model Selection for General Video Generation and Editing](https://arxiv.org/abs/2411.18983) — **2026 · IEEE Transactions on Image Processing**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.18983)

- [VideoAgent: All-in-One Framework for Video Understanding and Editing](https://arxiv.org/abs/2606.23327) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HKUDS/VideoAgent.svg?style=social&label=Star)](https://github.com/HKUDS/VideoAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.23327)

- [VideoGen-Agent: Reinforcing Video Generation Agents](https://arxiv.org/abs/2609.24997) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24997) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://andyca111.github.io/VideoGen_Agent/)

- [VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation](https://arxiv.org/abs/2606.08091) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/JianhuiWei7/VideoWeaver.svg?style=social&label=Star)](https://github.com/JianhuiWei7/VideoWeaver) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.08091)

- [VISTA: A Test-Time Self-Improving Video Generation Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://g-vista.github.io/)

- [VQQA: An Agentic Approach for Video Evaluation and Quality Improvement](https://arxiv.org/abs/2603.12310) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.12310)

- [Automated Movie Generation via Multi-Agent CoT Planning](https://arxiv.org/abs/2503.07314) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/showlab/MovieAgent.svg?style=social&label=Star)](https://github.com/showlab/MovieAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.07314) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://weijiawu.github.io/MovieAgent)

- [EditDuet: A Multi-Agent System for Video Non-Linear Editing](https://doi.org/10.1145/3721238.3730761) — **2025 · SIGGRAPH 2025: Conference Papers**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3721238.3730761) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mudtriangle.com/editduet)

- [AesopAgent: Agent-driven Evolutionary System on Story-to-Video Production](https://arxiv.org/abs/2403.07952) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.07952) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://aesopai.github.io/)

- [DreamFactory: Pioneering Multi-Scene Long Video Generation with a Multi-Agent Framework](https://arxiv.org/abs/2408.11788) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.11788)

### Evaluation in Self Improvement

- [Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](https://arxiv.org/abs/2510.04618) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/ace-agent/ace.svg?style=social&label=Star)](https://github.com/ace-agent/ace) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.04618)

- [AVGen-Bench: A Task-Driven Benchmark for Multi-Granular Evaluation of Text-to-Audio-Video Generation](https://arxiv.org/abs/2604.08540) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/microsoft/AVGen-Bench.svg?style=social&label=Star)](https://github.com/microsoft/AVGen-Bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.08540) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://aka.ms/avgenbench)

- [Do Video Generators Track the World Across Segments? A Benchmark and Method for World-State Reasoning in Video Continuation](https://arxiv.org/abs/2609.03673) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AMAP-ML/StateAgent.svg?style=social&label=Star)](https://github.com/AMAP-ML/StateAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.03673)

- [Don't Read the Log: Execution Traces Contaminate Verifiers in Video-Generation Agents](https://arxiv.org/abs/2609.28564) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.28564)

- [EvalVerse: Pipeline-Aware and Expert-Calibrated Benchmarking for Professional Cinematic Video Generation](https://arxiv.org/abs/2605.23271) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.23271)

- [Evo-Bench: Can Language Models Improve Agent Harness?](https://arxiv.org/abs/2608.09096) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/RUCAIBox/Evo-Bench.svg?style=social&label=Star)](https://github.com/RUCAIBox/Evo-Bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.09096)

- [Evo-Harness: Context-to-Harness Skill Compilation for Self-Evolving Agents](https://arxiv.org/abs/2608.15071) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/A-EVO-Lab/a-evolve.svg?style=social&label=Star)](https://github.com/A-EVO-Lab/a-evolve/tree/release/evo-harness) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.15071)

- [EvoHarnessBench: Can Your Agents Keep Pace with an Evolving Harness?](https://arxiv.org/abs/2609.04280) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.04280)

- [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/gepa-ai/gepa.svg?style=social&label=Star)](https://github.com/gepa-ai/gepa) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.19457)

- [Jailbreaking on Text-to-Video Models via Scene Splitting Strategy](https://arxiv.org/abs/2509.22292) — **2026 · International Conference on Learning Representations**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2509.22292)

- [Meta-Harness: End-to-End Optimization of Model Harnesses](https://arxiv.org/abs/2603.28052) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/stanford-iris-lab/meta-harness-tbench2-artifact.svg?style=social&label=Star)](https://github.com/stanford-iris-lab/meta-harness-tbench2-artifact) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.28052)

- [Open Evaluation Agent: Efficient and Promptable Evaluation of Visual Generative Models](https://arxiv.org/abs/2608.09666) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/Evaluation-Agent.svg?style=social&label=Star)](https://github.com/Vchitect/Evaluation-Agent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.09666)

- [PhyGround: Benchmarking Physical Reasoning in Generative World Models](https://arxiv.org/abs/2605.10806) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/NU-World-Model-Embodied-AI/PhyGround.svg?style=social&label=Star)](https://github.com/NU-World-Model-Embodied-AI/PhyGround) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.10806) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://phyground.github.io/)

- [PhysAgent: Reflective Agentic Physics Control for Physically Plausible Video Generation](https://arxiv.org/abs/2607.16355) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/IApple233/PhysAgent.svg?style=social&label=Star)](https://github.com/IApple233/PhysAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.16355) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://iapple233.github.io/PhysAgent)

- [RAVEN-Eval: Rubric-Guided Automatic Evaluation for AI Video Generation Models Based on LMM Preference Judgement](https://arxiv.org/abs/2608.09111) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.09111)

- [Rethinking the Evaluation of Harness Evolution for Agents](https://arxiv.org/abs/2607.12227) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.12227)

- [RewardVerse: Rubric-Guided Policy Optimization for Video Reward Modeling](https://arxiv.org/abs/2609.22947) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.22947)

- [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/google-research/rrsi.svg?style=social&label=Star)](https://github.com/google-research/rrsi) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24972)

- [Self-Correcting Text-to-Video Generation with Misalignment Detection and Localized Refinement](https://arxiv.org/abs/2411.15115) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/daeunni/VideoRepair.svg?style=social&label=Star)](https://github.com/daeunni/VideoRepair) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.15115) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://video-repair.github.io)

- [SLVMEval: Synthetic Meta Evaluation Benchmark for Text-to-Long Video Generation](https://arxiv.org/abs/2603.29186) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/tohoku-nlp/SLVMEval.svg?style=social&label=Star)](https://github.com/tohoku-nlp/SLVMEval) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.29186) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://slvmeval.github.io/)

- [TEAR: Temporal-aware Automated Red-teaming for Text-to-Video Models](https://arxiv.org/abs/2511.21145) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/Orangestella/Video_RedTeam.svg?style=social&label=Star)](https://github.com/Orangestella/Video_RedTeam) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.21145)

- [V2V-Bench: A Comprehensive Benchmark for Video-to-Video Generation Evaluation](https://arxiv.org/abs/2606.05665) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.05665)

- [VideoArgus: Agentic Rubric-Grounded Unified Evaluation for Video Generation and Editing](https://arxiv.org/abs/2608.05485) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.05485) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://zzzmyyzeng.github.io/VideoArgus)

- [VideoGen-Agent: Reinforcing Video Generation Agents](https://arxiv.org/abs/2609.24997) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24997) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://andyca111.github.io/VideoGen_Agent/)

- [VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation](https://arxiv.org/abs/2503.06800) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/Hritikbansal/videophy.svg?style=social&label=Star)](https://github.com/Hritikbansal/videophy/tree/main/VIDEOPHY2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.06800) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videophy2.github.io/)

- [VideoScore2: Think before You Score in Generated Video Evaluation](https://arxiv.org/abs/2509.22799) — **2026 · Transactions on Machine Learning Research**<br>
  [![Star](https://img.shields.io/github/stars/TIGER-AI-Lab/VideoScore2.svg?style=social&label=Star)](https://github.com/TIGER-AI-Lab/VideoScore2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2509.22799) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://tiger-ai-lab.github.io/VideoScore2/)

- [VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation](https://arxiv.org/abs/2606.08091) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/JianhuiWei7/VideoWeaver.svg?style=social&label=Star)](https://github.com/JianhuiWei7/VideoWeaver) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.08091)

- [VISTA: A Test-Time Self-Improving Video Generation Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://g-vista.github.io/)

- [VQQA: An Agentic Approach for Video Evaluation and Quality Improvement](https://arxiv.org/abs/2603.12310) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.12310)

- [A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/MaximeRobeyns/self_improving_coding_agent.svg?style=social&label=Star)](https://github.com/MaximeRobeyns/self_improving_coding_agent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.15228)

- [AFlow: Automating Agentic Workflow Generation](https://arxiv.org/abs/2410.10762) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/FoundationAgents/AFlow.svg?style=social&label=Star)](https://github.com/FoundationAgents/AFlow) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.10762)

- [AIGVE-MACS: Unified Multi-Aspect Commenting and Scoring Model for AI-Generated Video Evaluation](https://arxiv.org/abs/2507.01255) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.01255)

- [Automated Design of Agentic Systems](https://arxiv.org/abs/2408.08435) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/ShengranHu/ADAS.svg?style=social&label=Star)](https://github.com/ShengranHu/ADAS) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.08435)

- [Evaluation Agent: Efficient and Promptable Evaluation Framework for Visual Generative Models](https://aclanthology.org/2025.acl-long.374/) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/Evaluation-Agent.svg?style=social&label=Star)](https://github.com/Vchitect/Evaluation-Agent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2025.acl-long.374/)

- [Improving Video Generation with Human Feedback](https://arxiv.org/abs/2501.13918) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/KwaiVGI/VideoAlign.svg?style=social&label=Star)](https://github.com/KwaiVGI/VideoAlign) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.13918)

- [Spotlight: Identifying and Localizing Video Generation Errors Using VLMs](https://arxiv.org/abs/2511.18102) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.18102) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://spotlight-video.github.io/)

- [T2V-CompBench: A Comprehensive Benchmark for Compositional Text-to-video Generation](https://arxiv.org/abs/2407.14505) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/KaiyueSun98/T2V-CompBench.svg?style=social&label=Star)](https://github.com/KaiyueSun98/T2V-CompBench/tree/V2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.14505) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://t2v-compbench-2025.github.io/)

- [UVE: Are MLLMs Unified Evaluators for AI-Generated Videos?](https://arxiv.org/abs/2503.09949) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/bytedance/UVE.svg?style=social&label=Star)](https://github.com/bytedance/UVE) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.09949)

- [VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness](https://arxiv.org/abs/2503.21755) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/VBench.svg?style=social&label=Star)](https://github.com/Vchitect/VBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.21755) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vchitect.github.io/VBench-2.0-project/)

- [Video-Bench: Human-Aligned Video Generation Benchmark](https://arxiv.org/abs/2504.04907) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/Video-Bench/Video-Bench.svg?style=social&label=Star)](https://github.com/Video-Bench/Video-Bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.04907)

- [VideoGen-Eval: Agent-based System for Video Generation Evaluation](https://arxiv.org/abs/2503.23452) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AILab-CVC/VideoGen-Eval.svg?style=social&label=Star)](https://github.com/AILab-CVC/VideoGen-Eval) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.23452)

- [VideoPhy: Evaluating Physical Commonsense for Video Generation](https://arxiv.org/abs/2406.03520) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/Hritikbansal/videophy.svg?style=social&label=Star)](https://github.com/Hritikbansal/videophy) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.03520)

- [EvalCrafter: Benchmarking and Evaluating Large Video Generation Models](https://openaccess.thecvf.com/content/CVPR2024/html/Liu_EvalCrafter_Benchmarking_and_Evaluating_Large_Video_Generation_Models_CVPR_2024_paper.html) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/EvalCrafter/EvalCrafter.svg?style=social&label=Star)](https://github.com/EvalCrafter/EvalCrafter) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2024/html/Liu_EvalCrafter_Benchmarking_and_Evaluating_Large_Video_Generation_Models_CVPR_2024_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://evalcrafter.github.io/)

- [Frechet Video Motion Distance: A Metric for Evaluating Motion Consistency in Videos](https://arxiv.org/abs/2407.16124) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/ljh0v0/FMD-frechet-motion-distance.svg?style=social&label=Star)](https://github.com/ljh0v0/FMD-frechet-motion-distance) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.16124)

- [On the Content Bias in Frechet Video Distance](https://arxiv.org/abs/2404.12391) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/songweige/content-debiased-fvd.svg?style=social&label=Star)](https://github.com/songweige/content-debiased-fvd) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.12391) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://content-debiased-fvd.github.io/)

- [SafeSora: Towards Safety Alignment of Text2Video Generation via a Human Preference Dataset](https://arxiv.org/abs/2406.14477) — **2024 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/PKU-Alignment/safe-sora.svg?style=social&label=Star)](https://github.com/PKU-Alignment/safe-sora) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.14477) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://sites.google.com/view/safe-sora)

- [VBench: Comprehensive Benchmark Suite for Video Generative Models](https://arxiv.org/abs/2311.17982) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/VBench.svg?style=social&label=Star)](https://github.com/Vchitect/VBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.17982) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vchitect.github.io/VBench-project/)

- [VideoScore: Building Automatic Metrics to Simulate Fine-grained Human Feedback for Video Generation](https://arxiv.org/abs/2406.15252) — **2024 · Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing**<br>
  [![Star](https://img.shields.io/github/stars/TIGER-AI-Lab/VideoScore.svg?style=social&label=Star)](https://github.com/TIGER-AI-Lab/VideoScore) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.15252) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://tiger-ai-lab.github.io/VideoScore/)

- [Active Testing: Sample-Efficient Model Evaluation](https://proceedings.mlr.press/v139/kossen21a.html) — **2021 · Proceedings of the 38th International Conference on Machine Learning**<br>
  [![Star](https://img.shields.io/github/stars/jlko/active-testing.svg?style=social&label=Star)](https://github.com/jlko/active-testing) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v139/kossen21a.html)

- [Towards Accurate Generative Models of Video: A New Metric & Challenges](https://arxiv.org/abs/1812.01717) — **2018 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/google-research/google-research.svg?style=social&label=Star)](https://github.com/google-research/google-research/tree/master/frechet_video_distance) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/1812.01717)

### Recursion Channels in Video Generation

- [AgenticGen: Reward-Guided Agentic Video Generation for Advertising](https://arxiv.org/abs/2609.09187) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.09187)

- [Code Video Model: Conditioning Video Generation on Code](https://doi.org/10.13140/RG.2.2.34014.80961) — **2026 · Technical report,**<br>
  [![Star](https://img.shields.io/github/stars/code-video-model/CodeVideoModel.svg?style=social&label=Star)](https://github.com/code-video-model/CodeVideoModel) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://doi.org/10.13140/RG.2.2.34014.80961) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://code-video-model.github.io/)

- [Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents](https://arxiv.org/abs/2505.22954) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/jennyzzt/dgm.svg?style=social&label=Star)](https://github.com/jennyzzt/dgm) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.22954)

- [Dual-IPO: Dual-Iterative Preference Optimization for Text-to-Video Generation](https://arxiv.org/abs/2502.02088) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/SAIS-FUXI/IPO.svg?style=social&label=Star)](https://github.com/SAIS-FUXI/IPO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.02088)

- [EdenLive: Real-Time Generative Rendering from Any Visual Reference](https://assets.vast-eden.ai/assets/edenlive/EdenLive-tech-report.pdf) — **2026 · Technical report, VAST**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://assets.vast-eden.ai/assets/edenlive/EdenLive-tech-report.pdf)

- [JAVEDIT: Joint Audio-Visual Instruction-Guided Video Editing with Agentic Data Curation](https://arxiv.org/abs/2606.03168) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/RyanChenYN/JAVEdit.svg?style=social&label=Star)](https://github.com/RyanChenYN/JAVEdit) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.03168) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://ryanchenyn.github.io/projects/JAVEdit)

- [Programmable World Model](https://arxiv.org/abs/2609.10540) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.10540) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://alaya-lab.github.io/pwm)

- [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/deepgrounding/recursive-self-improvement.svg?style=social&label=Star)](https://github.com/deepgrounding/recursive-self-improvement) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.07663)

- [RewardVerse: Rubric-Guided Policy Optimization for Video Reward Modeling](https://arxiv.org/abs/2609.22947) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.22947)

- [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/google-research/rrsi.svg?style=social&label=Star)](https://github.com/google-research/rrsi) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24972)

- [SolarRenderer: Few-Step Generative Reference Rendering](https://arxiv.org/abs/2610.28630) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Enderfga/SolarRenderer.svg?style=social&label=Star)](https://github.com/Enderfga/SolarRenderer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2610.28630)

- [SPIRAL: Self-Evolving Action-Conditioned Video Generation via Reflective Planning Agents](https://arxiv.org/abs/2603.08403) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.08403) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://yuyang-cloud.github.io/spiral)

- [Video-RSI: Recursive Self-Improvement of Video Understanding Agents via Harness Evolution](https://arxiv.org/abs/2609.37950) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/bingjunluo/Video-RSI.svg?style=social&label=Star)](https://github.com/bingjunluo/Video-RSI) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.37950)

- [VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation](https://arxiv.org/abs/2606.08091) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/JianhuiWei7/VideoWeaver.svg?style=social&label=Star)](https://github.com/JianhuiWei7/VideoWeaver) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.08091)

- [VR-Thinker: Boosting Video Reward Models through Think-with-Image Reasoning](https://arxiv.org/abs/2510.10518) — **2026 · Proceedings of the 43rd International Conference on Machine Learning**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.10518) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vr-thinker.github.io/)

- [DanceGRPO: Unleashing GRPO on Visual Generation](https://arxiv.org/abs/2505.07818) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/XueZeyue/DanceGRPO.svg?style=social&label=Star)](https://github.com/XueZeyue/DanceGRPO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.07818) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dancegrpo.github.io/)

- [Exploration-Driven Generative Interactive Environments](https://arxiv.org/abs/2504.02515) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/insait-institute/GenieRedux.svg?style=social&label=Star)](https://github.com/insait-institute/GenieRedux) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.02515)

- [Follow-Your-Instruction: A Comprehensive MLLM Agent for World Data Synthesis](https://arxiv.org/abs/2508.05580) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2508.05580)

- [Self Forcing: Bridging the Train-Test Gap in Autoregressive Video Diffusion](https://arxiv.org/abs/2506.08009) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/guandeh17/Self-Forcing.svg?style=social&label=Star)](https://github.com/guandeh17/Self-Forcing) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.08009) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://self-forcing.github.io/)

- [VC-Agent: An Interactive Agent for Customized Video Dataset Collection](https://arxiv.org/abs/2509.21291) — **2025 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2509.21291) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://allenyidan.github.io/vcagent_page/)

- [VideoDPO: Omni-Preference Alignment for Video Diffusion Generation](https://arxiv.org/abs/2412.14167) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/CIntellifusion/VideoDPO.svg?style=social&label=Star)](https://github.com/CIntellifusion/VideoDPO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.14167) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videodpo.github.io/)

- [VideoUFO: A Million-Scale User-Focused Dataset for Text-to-Video Generation](https://arxiv.org/abs/2503.01739) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/WangWenhao0716/BenchUFO.svg?style=social&label=Star)](https://github.com/WangWenhao0716/BenchUFO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.01739) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://huggingface.co/datasets/WenhaoWang/VideoUFO)

- [Self-Consuming Generative Models Go MAD](https://arxiv.org/abs/2307.01850) — **2024 · International Conference on Learning Representations (ICLR)**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.01850)

- [Scaling Laws for Reward Model Overoptimization](https://arxiv.org/abs/2210.10760) — **2023 · Proceedings of the 40th International Conference on Machine Learning**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.10760)

- [The Curse of Recursion: Training on Generated Data Makes Models Forget](https://arxiv.org/abs/2305.17493) — **2023 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.17493)

### Foundation Model Improvement

- [AnyFlow: Any-Step Video Diffusion Model with On-Policy Flow Map Distillation](https://arxiv.org/abs/2605.13724) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/NVlabs/AnyFlow.svg?style=social&label=Star)](https://github.com/NVlabs/AnyFlow) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.13724) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://nvlabs.github.io/AnyFlow/)

- [Causal Forcing: Autoregressive Diffusion Distillation Done Right for High-Quality Real-Time Interactive Video Generation](https://arxiv.org/abs/2602.02214) — **2026 · Proceedings of the 43rd International Conference on Machine Learning**<br>
  [![Star](https://img.shields.io/github/stars/thu-ml/Causal-Forcing.svg?style=social&label=Star)](https://github.com/thu-ml/Causal-Forcing) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.02214) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://thu-ml.github.io/CausalForcing.github.io/)

- [JAVEDIT: Joint Audio-Visual Instruction-Guided Video Editing with Agentic Data Curation](https://arxiv.org/abs/2606.03168) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/RyanChenYN/JAVEdit.svg?style=social&label=Star)](https://github.com/RyanChenYN/JAVEdit) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.03168) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://ryanchenyn.github.io/projects/JAVEdit)

- [Parallel Decoding Distillation for Fast Image and Video Generation](https://arxiv.org/abs/2607.26004) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.26004)

- [Phantom-Data: Towards a General Subject-Consistent Video Generation Dataset](https://arxiv.org/abs/2506.18851) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/Phantom-video/Phantom-Data.svg?style=social&label=Star)](https://github.com/Phantom-video/Phantom-Data) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.18851) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://phantom-video.github.io/Phantom-Data/)

- [PhysInOne: Visual Physics Learning and Reasoning in One Suite](https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_PhysInOne_Visual_Physics_Learning_and_Reasoning_in_One_Suite_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_PhysInOne_Visual_Physics_Learning_and_Reasoning_in_One_Suite_CVPR_2026_paper.html)

- [RewardVerse: Rubric-Guided Policy Optimization for Video Reward Modeling](https://arxiv.org/abs/2609.22947) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.22947)

- [Scaling Instruction-Based Video Editing with a High-Quality Synthetic Dataset](https://arxiv.org/abs/2510.15742) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/EzioBy/Ditto.svg?style=social&label=Star)](https://github.com/EzioBy/Ditto) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.15742) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://ezioby.github.io/Ditto_page)

- [SolarWM: Open Data and Scalable Training for Long-Horizon Video World Models](https://arxiv.org/abs/2609.02886) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Junchao-cs/SolarWM.svg?style=social&label=Star)](https://github.com/Junchao-cs/SolarWM) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.02886) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://junchao-cs.github.io/SolarWM-Web/)

- [SPIRAL: Self-Evolving Action-Conditioned Video Generation via Reflective Planning Agents](https://arxiv.org/abs/2603.08403) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.08403) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://yuyang-cloud.github.io/spiral)

- [Transition Matching Distillation for Fast Video Generation](https://openaccess.thecvf.com/content/CVPR2026/html/Nie_Transition_Matching_Distillation_for_Fast_Video_Generation_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Nie_Transition_Matching_Distillation_for_Fast_Video_Generation_CVPR_2026_paper.html)

- [Vidu S2: Real-Time Interactive, Editable, and Spatial Video Generation](https://arxiv.org/abs/2609.11638) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.11638)

- [VR-Thinker: Boosting Video Reward Models through Think-with-Image Reasoning](https://arxiv.org/abs/2510.10518) — **2026 · Proceedings of the 43rd International Conference on Machine Learning**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.10518) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vr-thinker.github.io/)

- [CogVideoX: Text-to-Video Diffusion Models with An Expert Transformer](https://arxiv.org/abs/2408.06072) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/THUDM/CogVideo.svg?style=social&label=Star)](https://github.com/THUDM/CogVideo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.06072)

- [DanceGRPO: Unleashing GRPO on Visual Generation](https://arxiv.org/abs/2505.07818) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/XueZeyue/DanceGRPO.svg?style=social&label=Star)](https://github.com/XueZeyue/DanceGRPO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.07818) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dancegrpo.github.io/)

- [Follow-Your-Instruction: A Comprehensive MLLM Agent for World Data Synthesis](https://arxiv.org/abs/2508.05580) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2508.05580)

- [From Slow Bidirectional to Fast Autoregressive Video Diffusion Models](https://arxiv.org/abs/2412.07772) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/tianweiy/CausVid.svg?style=social&label=Star)](https://github.com/tianweiy/CausVid) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.07772) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://causvid.github.io/)

- [Improving Video Generation with Human Feedback](https://arxiv.org/abs/2501.13918) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/KwaiVGI/VideoAlign.svg?style=social&label=Star)](https://github.com/KwaiVGI/VideoAlign) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.13918)

- [Koala-36M: A Large-scale Video Dataset Improving Consistency between Fine-grained Conditions and Video Content](https://arxiv.org/abs/2410.08260) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.08260) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://koala36m.github.io/)

- [MotionAgent: Fine-grained Controllable Video Generation via Motion Field Agent](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/leoisufa/MotionAgent.svg?style=social&label=Star)](https://github.com/leoisufa/MotionAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html)

- [OpenVid-1M: A Large-Scale High-Quality Dataset for Text-to-video Generation](https://arxiv.org/abs/2407.02371) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/NJU-PCALab/OpenVid-1M.svg?style=social&label=Star)](https://github.com/NJU-PCALab/OpenVid-1M) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.02371)

- [Rewarddance: Reward scaling in visual generation](https://arxiv.org/abs/2509.08826) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2509.08826)

- [Self Forcing: Bridging the Train-Test Gap in Autoregressive Video Diffusion](https://arxiv.org/abs/2506.08009) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/guandeh17/Self-Forcing.svg?style=social&label=Star)](https://github.com/guandeh17/Self-Forcing) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.08009) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://self-forcing.github.io/)

- [Swap Attention in Spatiotemporal Diffusions for Text-to-Video Generation](https://arxiv.org/abs/2305.10874) — **2025 · International Journal of Computer Vision**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.10874)

- [T2V-Turbo-v2: Enhancing Video Generation Model Post-Training through Data, Reward, and Conditional Guidance Design](https://arxiv.org/abs/2410.05677) — **2025 · International Conference on Learning Representations (ICLR)**<br>
  [![Star](https://img.shields.io/github/stars/Ji4chenLi/t2v-turbo.svg?style=social&label=Star)](https://github.com/Ji4chenLi/t2v-turbo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.05677) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://t2v-turbo-v2.github.io/)

- [VACE: All-in-One Video Creation and Editing](https://openaccess.thecvf.com/content/ICCV2025/html/Jiang_VACE_All-in-One_Video_Creation_and_Editing_ICCV_2025_paper.html) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/ali-vilab/VACE.svg?style=social&label=Star)](https://github.com/ali-vilab/VACE) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/html/Jiang_VACE_All-in-One_Video_Creation_and_Editing_ICCV_2025_paper.html)

- [VC-Agent: An Interactive Agent for Customized Video Dataset Collection](https://arxiv.org/abs/2509.21291) — **2025 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2509.21291) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://allenyidan.github.io/vcagent_page/)

- [VideoDPO: Omni-Preference Alignment for Video Diffusion Generation](https://arxiv.org/abs/2412.14167) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/CIntellifusion/VideoDPO.svg?style=social&label=Star)](https://github.com/CIntellifusion/VideoDPO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.14167) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videodpo.github.io/)

- [VideoUFO: A Million-Scale User-Focused Dataset for Text-to-Video Generation](https://arxiv.org/abs/2503.01739) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/WangWenhao0716/BenchUFO.svg?style=social&label=Star)](https://github.com/WangWenhao0716/BenchUFO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.01739) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://huggingface.co/datasets/WenhaoWang/VideoUFO)

- [Wan: Open and advanced large-scale video generative models](https://arxiv.org/abs/2503.20314) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Wan-Video/Wan2.1.svg?style=social&label=Star)](https://github.com/Wan-Video/Wan2.1) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.20314)

- [AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/hash/94894cf9bab20c00f6eaaff3b7f2be70-Abstract-Conference.html) — **2024 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/guoyww/AnimateDiff.svg?style=social&label=Star)](https://github.com/guoyww/AnimateDiff) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.iclr.cc/paper_files/paper/2024/hash/94894cf9bab20c00f6eaaff3b7f2be70-Abstract-Conference.html)

- [DreamRunner: Fine-Grained Compositional Story-to-Video Generation with Retrieval-Augmented Motion Adaptation](https://arxiv.org/abs/2411.16657) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/wz0919/DreamRunner.svg?style=social&label=Star)](https://github.com/wz0919/DreamRunner) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.16657) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://zunwang1.github.io/DreamRunner)

- [HunyuanVideo: A Systematic Framework For Large Video Generative Models](https://arxiv.org/abs/2412.03603) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Tencent/HunyuanVideo.svg?style=social&label=Star)](https://github.com/Tencent/HunyuanVideo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.03603)

- [InstructVideo: Instructing Video Diffusion Models with Human Feedback](https://arxiv.org/abs/2312.12490) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/damo-vilab/i2vgen-xl.svg?style=social&label=Star)](https://github.com/damo-vilab/i2vgen-xl/blob/main/doc/InstructVideo.md) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.12490) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://instructvideo.github.io/)

- [Motion Consistency Model: Accelerating Video Diffusion with Disentangled Motion-Appearance Distillation](https://arxiv.org/abs/2406.06890) — **2024 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/yhZhai/mcm.svg?style=social&label=Star)](https://github.com/yhZhai/mcm) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.06890) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://yhzhai.github.io/mcm/)

- [MotionDirector: Motion Customization of Text-to-Video Diffusion Models](https://arxiv.org/abs/2310.08465) — **2024 · Computer Vision -- ECCV 2024**<br>
  [![Star](https://img.shields.io/github/stars/showlab/MotionDirector.svg?style=social&label=Star)](https://github.com/showlab/MotionDirector) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.08465) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/MotionDirector/)

- [Panda-70M: Captioning 70M Videos with Multiple Cross-Modality Teachers](https://arxiv.org/abs/2402.19479) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/snap-research/Panda-70M.svg?style=social&label=Star)](https://github.com/snap-research/Panda-70M) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.19479) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://snap-research.github.io/Panda-70M)

- [ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://arxiv.org/abs/2406.04325) — **2024 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/ShareGPT4Omni/ShareGPT4Video.svg?style=social&label=Star)](https://github.com/ShareGPT4Omni/ShareGPT4Video) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.04325) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://sharegpt4video.github.io/)

- [T2V-Turbo: Breaking the Quality Bottleneck of Video Consistency Model with Mixed Reward Feedback](https://arxiv.org/abs/2405.18750) — **2024 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/Ji4chenLi/t2v-turbo.svg?style=social&label=Star)](https://github.com/Ji4chenLi/t2v-turbo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.18750) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://t2v-turbo.github.io/)

- [VideoCrafter2: Overcoming Data Limitations for High-Quality Video Diffusion Models](https://arxiv.org/abs/2401.09047) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/AILab-CVC/VideoCrafter.svg?style=social&label=Star)](https://github.com/AILab-CVC/VideoCrafter) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.09047) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://ailab-cvc.github.io/videocrafter)

- [VideoScore: Building Automatic Metrics to Simulate Fine-grained Human Feedback for Video Generation](https://arxiv.org/abs/2406.15252) — **2024 · Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing**<br>
  [![Star](https://img.shields.io/github/stars/TIGER-AI-Lab/VideoScore.svg?style=social&label=Star)](https://github.com/TIGER-AI-Lab/VideoScore) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.15252) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://tiger-ai-lab.github.io/VideoScore/)

- [Make-a-video: Text-to-video generation without text-video data](https://arxiv.org/abs/2209.14792) — **2023 · International Conference on Learning Representations**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2209.14792)

- [Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets](https://arxiv.org/abs/2311.15127) — **2023 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Stability-AI/generative-models.svg?style=social&label=Star)](https://github.com/Stability-AI/generative-models) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.15127)

- [Tune-a-video: One-shot tuning of image diffusion models for text-to-video generation](https://doi.org/10.1109/ICCV51070.2023.00701) — **2023 · 2023 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Tune-A-Video.svg?style=social&label=Star)](https://github.com/showlab/Tune-A-Video) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1109/ICCV51070.2023.00701)

- [Frozen in Time: A Joint Video and Image Encoder for End-to-End Retrieval](https://arxiv.org/abs/2104.00650) — **2021 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/m-bain/frozen-in-time.svg?style=social&label=Star)](https://github.com/m-bain/frozen-in-time) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2104.00650)

## Agent Design

Perception, tool use, feedback, memory, reusable skills, and multi-agent organization. **162 resources.**

### Overview

- [A$^2$RD: Agentic Autoregressive Diffusion for Long Video Consistency](https://arxiv.org/abs/2605.06924) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.06924) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://dxlong2000.github.io/AARD)

- [Action Agent: Agentic Video Generation Meets Flow-Constrained Diffusion](https://arxiv.org/abs/2605.01477) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.01477)

- [AgenticGen: Reward-Guided Agentic Video Generation for Advertising](https://arxiv.org/abs/2609.09187) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.09187)

- [AgentMV: A State-Guided Multi-Agent Framework for Budget-Aware Music Video Generation](https://arxiv.org/abs/2605.10723) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.10723)

- [Agents' Last Exam](https://arxiv.org/abs/2606.05405) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/rdi-berkeley/agents-last-exam.svg?style=social&label=Star)](https://github.com/rdi-berkeley/agents-last-exam) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.05405)

- [ATVG: Agentic System for Factually Grounded Travel Advertisement Video Generation](https://doi.org/10.1145/3805712.3808387) — **2026 · Proceedings of the 49th International ACM SIGIR Conference on Research and Development in Information Retrieval**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3805712.3808387)

- [Better Call CineCrew: Consistent Ultra-Long Narrative-to-Film Generation](https://arxiv.org/abs/2609.07720) — **2026 · ECCV**<br>
  [![Star](https://img.shields.io/github/stars/Ironieser/CineCrew.svg?style=social&label=Star)](https://github.com/Ironieser/CineCrew) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.07720) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://jiabenchen.github.io/cinecrew/)

- [Beyond Coherence: Benchmarking Professional Editing-Technique Execution in Multi-Shot Audio-Video Generation](https://arxiv.org/abs/2609.08275) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AlibabaResearch/cut-craft-bench.svg?style=social&label=Star)](https://github.com/AlibabaResearch/cut-craft-bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.08275)

- [Beyond End-to-End Video Models: An LLM-Based Multi-Agent System for Educational Video Generation](https://doi.org/10.1145/3770855.3818323) — **2026 · KDD 2026: Applied Data Science, Vol. 2**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3770855.3818323)

- [Beyond Trial-and-Error: Agentic Optimization for Image-to-Video Adherence](https://arxiv.org/abs/2608.12290) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.12290)

- [Bridging Creative Intent and Visual Quality: Creator-Driven Recurrent Video Generation with Agentic Feedback Loops](https://arxiv.org/abs/2606.18591) — **2026 · ICML Workshop on Human-AI Co-Creativity**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.18591)

- [Camera Artist: A Multi-Agent Framework for Cinematic Language Storytelling Video Generation](https://arxiv.org/abs/2604.09195) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.09195)

- [CamPilot: A Multi-Agent Cinematic Assistant for Camera-Controlled Movie Generation](https://arxiv.org/abs/2609.10943) — **2026 · EMNLP REALM Workshop**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.10943)

- [CANVAS: Continuity-Aware Narratives via Visual Agentic Storyboarding](https://arxiv.org/abs/2604.13452) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.13452)

- [CineAGI: Character-Consistent Movie Creation through LLM-Orchestrated Multi-Modal Generation and Cross-Scene Integration](https://arxiv.org/abs/2604.23579) — **2026 · ICME**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.23579)

- [CineForge: Self-Improving Agents for Long-Horizon Video Generation](https://arxiv.org/abs/2608.29621) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.29621)

- [Co-Director: Agentic Generative Video Storytelling](https://arxiv.org/abs/2604.24842) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GoogleCloudPlatform/genmedia-izumi-agent.svg?style=social&label=Star)](https://github.com/GoogleCloudPlatform/genmedia-izumi-agent/tree/main/demos/backend/ads_codirector) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.24842) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://co-director-agent.github.io/)

- [CutClaw: Agentic Hours-Long Video Editing via Music Synchronization](https://arxiv.org/abs/2603.29664) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GVCLab/CutClaw.svg?style=social&label=Star)](https://github.com/GVCLab/CutClaw) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.29664)

- [CutVerse: A Compositional GUI Agents Benchmark for Media Post-Production Editing](https://arxiv.org/abs/2605.19484) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CUC-MIPG/CutVerse.svg?style=social&label=Star)](https://github.com/CUC-MIPG/CutVerse) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.19484)

- [DataMagic: Transforming Tabular Data into Data Insight Video](https://arxiv.org/abs/2606.20388) — **2026 · VLDB**<br>
  [![Star](https://img.shields.io/github/stars/HKUSTDial/DataMagic.svg?style=social&label=Star)](https://github.com/HKUSTDial/DataMagic) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20388) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://datamagic-home.github.io/)

- [DeepPresenter: Environment-Grounded Reflection for Agentic Presentation Generation](https://doi.org/10.18653/v1/2026.findings-acl.1578) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/icip-cas/PPTAgent.svg?style=social&label=Star)](https://github.com/icip-cas/PPTAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2026.findings-acl.1578)

- [DirectorBench: Diagnosing Long-Form Video Generation with Personalized Multi-Agent Evaluation](https://arxiv.org/abs/2605.30090) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/jiaminchen-1031/DirectorBench.svg?style=social&label=Star)](https://github.com/jiaminchen-1031/DirectorBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.30090)

- [DramaDirector: Geometry-Guided Short Drama Generation](https://arxiv.org/abs/2606.24107) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/iLearn-Lab/DramaDirector.svg?style=social&label=Star)](https://github.com/iLearn-Lab/DramaDirector) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.24107)

- [ELLMPEG: An Edge-based Agentic LLM Video Processing Tool](https://doi.org/10.1145/3793853.3795760) — **2026 · ACM MMSys 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3793853.3795760)

- [EM-Vid: Training-Free Entity-Centric Memory for Efficient and Consistent Multi-Shot Video Generation](https://arxiv.org/abs/2605.23610) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.23610)

- [EvoState: Closed-Loop Visual State Management for Long-Form Video Generation](https://arxiv.org/abs/2606.16184) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.16184)

- [FilmWeaver: Weaving Consistent Multi-Shot Videos with Cache-Guided Autoregressive Diffusion](https://doi.org/10.1609/aaai.v40i9.37711) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i9.37711) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://luoxyhappy.github.io/FilmWeaver/)

- [FilmWorld: Agentic Novel-to-Film Generation through Dynamic Cinematic World Modeling](https://arxiv.org/abs/2607.19038) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.19038) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://filmworld-ai.github.io)

- [FRAMEWORKERS: A Dynamic Multi-Agent Framework for AI-Generated Video Production](https://arxiv.org/abs/2608.29814) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.29814)

- [FreeMem: Enhancing Consistency in Long Video Generation via Tuning-Free Memory](https://doi.org/10.1609/aaai.v40i10.37783) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i10.37783)

- [From Clay 3D Render to a Real Action Short: A 3D-to-AI Pipeline with Total Control](https://blog.fal.ai/from-clay-3d-render-to-a-real-action-short-a-3d-to-ai-pipeline-with-total-control/) — **2026 · fal.ai Blog**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://blog.fal.ai/from-clay-3d-render-to-a-real-action-short-a-3d-to-ai-pipeline-with-total-control/)

- [GenMAC: Compositional Text-to-Video Generation with Multi-Agent Collaboration](https://doi.org/10.1609/aaai.v40i7.37418) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Star](https://img.shields.io/github/stars/Karine-Huang/GenMAC.svg?style=social&label=Star)](https://github.com/Karine-Huang/GenMAC) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i7.37418) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://karine-h.github.io/GenMAC/)

- [GPT-6 Astra: A New Generation of Intelligence](https://openai.com/index/gpt-6-astra/) — **2026 · Online resource**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openai.com/index/gpt-6-astra/)

- [GroundShot: Visually Consistent Multi-Shot Long Video Generation via Entity-Grounded Shot Scheduling](https://arxiv.org/abs/2606.20799) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20799)

- [Identity-Preserving Text-to-Video Generation via Agentic Enhancement and Semantic Repair](https://arxiv.org/abs/2608.20749) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/oceanflowlab/AESR.svg?style=social&label=Star)](https://github.com/oceanflowlab/AESR) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.20749)

- [InteracVid: Building a Real Interactive Audio-Visual Response Dataset from Live-Chat Videos](https://arxiv.org/abs/2608.01157) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/InteracVid/InteracVid.svg?style=social&label=Star)](https://github.com/InteracVid/InteracVid) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.01157)

- [Lighting-grounded Video Generation with Renderer-based Agent Reasoning](https://arxiv.org/abs/2604.07966) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.07966)

- [MAViS: A Multi-Agent Framework for Long-Sequence Video Storytelling](https://aclanthology.org/2026.eacl-long.101/) — **2026 · Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.eacl-long.101/)

- [Memento: Reconstruct to Remember for Consistent Long Video Generation](https://arxiv.org/abs/2606.14667) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/ernie-research/Memento.svg?style=social&label=Star)](https://github.com/ernie-research/Memento) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.14667) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://ernie-research.github.io/Memento/)

- [Memory-V2V: Memory-Augmented Video-to-Video Diffusion for Consistent Multi-turn Editing](https://doi.org/10.1007/978-3-032-37324-3_5) — **2026 · Computer Vision -- ECCV 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1007/978-3-032-37324-3_5)

- [MemRoPE: Training-Free Infinite Video Generation via Evolving Memory Tokens](https://doi.org/10.1007/978-3-032-37356-4_14) — **2026 · Computer Vision -- ECCV 2026**<br>
  [![Star](https://img.shields.io/github/stars/YoungRaeKimm/MemRoPE.svg?style=social&label=Star)](https://github.com/YoungRaeKimm/MemRoPE) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1007/978-3-032-37356-4_14)

- [MoReGen: Multi-Agent Motion-Reasoning Engine for Code-based Text-to-Video Synthesis](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_MoReGen_Multi-Agent_Motion-Reasoning_Engine_for_Code-based_Text-to-Video_Synthesis_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_MoReGen_Multi-Agent_Motion-Reasoning_Engine_for_Code-based_Text-to-Video_Synthesis_CVPR_2026_paper.html)

- [Multi-Agent CAD Code Generation](https://doi.org/10.1145/3799902.3811067) — **2026 · ACM SIGGRAPH 2026 Conference Papers**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3799902.3811067)

- [MVAgent: Multi-Agent Video Generation via Consistent Condition Construction and Shot-Level Policy Optimization](https://arxiv.org/abs/2609.30609) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.30609)

- [MVWeaver: A Hierarchical Music Video Generation Agent with a Learned Song-to-Visual Bridge](https://arxiv.org/abs/2609.06478) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.06478)

- [NEWTON: Agentic Planning for Physically Grounded Video Generation](https://arxiv.org/abs/2605.18396) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CUTEPKQ/NEWTON.svg?style=social&label=Star)](https://github.com/CUTEPKQ/NEWTON) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18396) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://Newton026.github.io/newton)

- [OmniDrive: An LLM-Choreographed Multi-Agent World Model with Unified Latent Co-Compression for Multi-View Driving Video Generation](https://arxiv.org/abs/2606.17536) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.17536)

- [One Sentence, One Drama: Personalized Short-Form Drama Generation via Multi-Agent Systems](https://arxiv.org/abs/2605.22144) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.22144)

- [One-take Creation, Flexible Referencing: Introducing Seedance 2.5](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5) — **2026 · Official product report**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5)

- [OneStory: Coherent Multi-Shot Video Generation with Adaptive Memory](https://openaccess.thecvf.com/content/CVPR2026/html/An_OneStory_Coherent_Multi-Shot_Video_Generation_with_Adaptive_Memory_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/An_OneStory_Coherent_Multi-Shot_Video_Generation_with_Adaptive_Memory_CVPR_2026_paper.html)

- [PhysAgent: Reflective Agentic Physics Control for Physically Plausible Video Generation](https://arxiv.org/abs/2607.16355) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/IApple233/PhysAgent.svg?style=social&label=Star)](https://github.com/IApple233/PhysAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.16355) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://iapple233.github.io/PhysAgent)

- [PhysPlan: Grounded Physical State Reasoning and Graph-Guided Optimization for Physically Plausible Video Generation](https://arxiv.org/abs/2609.13006) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.13006) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://physplan.github.io/)

- [ReCA: Multi-Shot Long Video Extrapolation via Recursive Context Allocation](https://arxiv.org/abs/2605.26525) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.26525)

- [Recommendation as Generation: Unifying Personalized Video Generation and Recommendation at Industrial Scale](https://arxiv.org/abs/2606.25496) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.25496) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://recommendation-as-generation.github.io/)

- [Ring Forcing: Towards Precise Long-Term Memory for Autoregressive Video Diffusion](https://doi.org/10.1007/978-3-032-37602-2_13) — **2026 · Computer Vision -- ECCV 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1007/978-3-032-37602-2_13)

- [Scene2Scene: LLM-driven 3D Spatial Blockout for Guided AI Video Synthesis](https://doi.org/10.1145/3807895.3807932) — **2026 · Companion Proceedings of the Symposium on Interactive 3D Graphics and Games**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3807895.3807932)

- [SCMAPR: Self-Correcting Multi-Agent Prompt Refinement for Complex-Scenario Text-to-Video Generation](https://aclanthology.org/2026.findings-acl.345/) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/HiThink-Research/SCMAPR.svg?style=social&label=Star)](https://github.com/HiThink-Research/SCMAPR) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.findings-acl.345/)

- [SimWorlds: A Multi-Agent System for Dynamic 3D Scene Creation](https://arxiv.org/abs/2607.01766) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.01766) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dynsimworlds.github.io/)

- [Soap2Soap: Long Cinematic Video Remaking via Multi-Agent Collaboration](https://arxiv.org/abs/2605.17423) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Soap2Soap.svg?style=social&label=Star)](https://github.com/showlab/Soap2Soap) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.17423)

- [SPIRAL: Self-Evolving Action-Conditioned Video Generation via Reflective Planning Agents](https://arxiv.org/abs/2603.08403) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.08403) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://yuyang-cloud.github.io/spiral)

- [Streaming Multi-Agent Autoregressive Diffusion Model with World State Registers](https://arxiv.org/abs/2607.21594) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.21594) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vail-ucla.github.io/worldweaver/)

- [TeachMaster: Generative Teaching via Code](https://aclanthology.org/2026.acl-industry.7/) — **2026 · Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 6: Industry Track)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.acl-industry.7/) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.teachmaster.cn/)

- [Training and Agentic Inference Strategies for LLM-based Manim Animation Generation](https://arxiv.org/abs/2604.18364) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/SuienS/manim-trainer.svg?style=social&label=Star)](https://github.com/SuienS/manim-trainer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.18364)

- [VideoAgent: All-in-One Framework for Video Understanding and Editing](https://arxiv.org/abs/2606.23327) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HKUDS/VideoAgent.svg?style=social&label=Star)](https://github.com/HKUDS/VideoAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.23327)

- [VideoArgus: Agentic Rubric-Grounded Unified Evaluation for Video Generation and Editing](https://arxiv.org/abs/2608.05485) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.05485) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://zzzmyyzeng.github.io/VideoArgus)

- [VideoCoCo: Code-as-CoT for Physically-Consistent Video Generation via an Agentic Dual-Engine System](https://arxiv.org/abs/2607.27380) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/micky-li-hd/VideoCoCo.svg?style=social&label=Star)](https://github.com/micky-li-hd/VideoCoCo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.27380)

- [VideoCreator: An Agentic System for Multi-turn Video Production](https://doi.org/10.1145/3805622.3810431) — **2026 · Proceedings of the 2026 International Conference on Multimedia Retrieval**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3805622.3810431)

- [VideoGen-Agent: Reinforcing Video Generation Agents](https://arxiv.org/abs/2609.24997) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24997) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://andyca111.github.io/VideoGen_Agent/)

- [VideoMemory: Toward Consistent Video Generation via Memory Integration](https://arxiv.org/abs/2601.03655) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/EnVision-Research/VideoMemory.svg?style=social&label=Star)](https://github.com/EnVision-Research/VideoMemory) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.03655) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://hit-perfect.github.io/VideoMemory/)

- [VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation](https://arxiv.org/abs/2606.08091) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/JianhuiWei7/VideoWeaver.svg?style=social&label=Star)](https://github.com/JianhuiWei7/VideoWeaver) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.08091)

- [ViMax: Agentic Video Generation](https://arxiv.org/abs/2606.07649) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HKUDS/ViMax.svg?style=social&label=Star)](https://github.com/HKUDS/ViMax) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.07649)

- [VINCIE-NExT: Unlocking Video Editing from Images via In-Context Modeling](https://arxiv.org/abs/2610.12104) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/LgQu/VINCIE-NExT.svg?style=social&label=Star)](https://github.com/LgQu/VINCIE-NExT) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2610.12104) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vincie-next.github.io/)

- [VIPER: Visual In-Context Physics Reasoning for Physically Plausible Video Generation](https://arxiv.org/abs/2607.23472) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.23472)

- [Vision Wormhole: Latent-Space Communication in Heterogeneous Multi-Agent Systems](https://arxiv.org/abs/2602.15382) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.15382)

- [VISTA: A Test-Time Self-Improving Video Generation Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://g-vista.github.io/)

- [VQ-Insight: Teaching VLMs for AI-Generated Video Quality Understanding via Progressive Visual Reinforcement Learning](https://doi.org/10.1609/aaai.v40i15.38285) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i15.38285)

- [VQQA: An Agentic Approach for Video Evaluation and Quality Improvement](https://arxiv.org/abs/2603.12310) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.12310)

- [World Narrative Model for Highly Controllable Video Generation: A Paradigm Shift from Pixel Sampling to Physical World Orchestration](https://arxiv.org/abs/2606.31946) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.31946)

- [3D Animation Generation Using Blender and Agentic AI](https://doi.org/10.5220/0014628000004852) — **2025 · Proceedings of the 1st International Conference on Interdisciplinary Technology & Science Convergence (FusionX Global)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.5220/0014628000004852)

- [Agent Workflow Memory](https://proceedings.mlr.press/v267/wang25bx.html) — **2025 · Proceedings of the 42nd International Conference on Machine Learning**<br>
  [![Star](https://img.shields.io/github/stars/zorazrw/agent-workflow-memory.svg?style=social&label=Star)](https://github.com/zorazrw/agent-workflow-memory) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v267/wang25bx.html)

- [AgentDropout: Dynamic Agent Elimination for Token-Efficient and High-Performance LLM-Based Multi-Agent Collaboration](https://doi.org/10.18653/v1/2025.acl-long.1170) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/wangzx1219/AgentDropout.svg?style=social&label=Star)](https://github.com/wangzx1219/AgentDropout) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2025.acl-long.1170)

- [AIGVE-MACS: Unified Multi-Aspect Commenting and Scoring Model for AI-Generated Video Evaluation](https://arxiv.org/abs/2507.01255) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.01255)

- [AniMaker: Multi-Agent Animated Storytelling with MCTS-Driven Clip Generation](https://animaker-dev.github.io/) — **2025 · SIGGRAPH Asia 2025: Conference Papers**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/Anim-Director.svg?style=social&label=Star)](https://github.com/HITsz-TMG/Anim-Director/tree/main/AniMaker) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://animaker-dev.github.io/)

- [Automated Movie Generation via Multi-Agent CoT Planning](https://arxiv.org/abs/2503.07314) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/showlab/MovieAgent.svg?style=social&label=Star)](https://github.com/showlab/MovieAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.07314) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://weijiawu.github.io/MovieAgent)

- [AutoMV: An Automatic Multi-Agent System for Music Video Generation](https://arxiv.org/abs/2512.12196) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/multimodal-art-projection/AutoMV.svg?style=social&label=Star)](https://github.com/multimodal-art-projection/AutoMV) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.12196)

- [AutoMV: An Autonomous Agent Framework for Real Estate Marketing Video Generation](https://doi.org/10.1609/aaai.v39i28.35377) — **2025 · AAAI 2025: Demonstration Track**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v39i28.35377)

- [Code2Video: A Code-centric Paradigm for Educational Video Generation](https://arxiv.org/abs/2510.01174) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Code2Video.svg?style=social&label=Star)](https://github.com/showlab/Code2Video) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.01174) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/Code2Video/)

- [ComfyGPT: A Self-Optimizing Multi-Agent System for Comprehensive ComfyUI Workflow Generation](https://arxiv.org/abs/2503.17671) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/comfygpt/comfygpt.svg?style=social&label=Star)](https://github.com/comfygpt/comfygpt) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.17671)

- [ComfyMind: Toward General-Purpose Generation via Tree-Based Planning and Reactive Feedback](https://arxiv.org/abs/2505.17908) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/LitaoGuo/ComfyMind.svg?style=social&label=Star)](https://github.com/LitaoGuo/ComfyMind) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.17908)

- [Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval](https://arxiv.org/abs/2506.03141) — **2025 · Proceedings of the SIGGRAPH Asia 2025 Conference Papers**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.03141) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://context-as-memory.github.io/)

- [Corgi: Cached Memory Guided Video Generation](https://doi.org/10.1109/WACV61041.2025.00450) — **2025 · 2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1109/WACV61041.2025.00450)

- [EditDuet: A Multi-Agent System for Video Non-Linear Editing](https://doi.org/10.1145/3721238.3730761) — **2025 · SIGGRAPH 2025: Conference Papers**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3721238.3730761) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mudtriangle.com/editduet)

- [Evaluation Agent: Efficient and Promptable Evaluation Framework for Visual Generative Models](https://aclanthology.org/2025.acl-long.374/) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/Evaluation-Agent.svg?style=social&label=Star)](https://github.com/Vchitect/Evaluation-Agent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2025.acl-long.374/)

- [FilmAgent: A Multi-Agent Framework for End-to-End Film Automation in Virtual 3D Spaces](https://arxiv.org/abs/2501.12909) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/VideoClaw.svg?style=social&label=Star)](https://github.com/HITsz-TMG/VideoClaw/tree/main/FilmAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.12909) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://filmagent.github.io/)

- [FullDiT2: Efficient In-Context Conditioning for Video Diffusion Transformers](https://arxiv.org/abs/2506.04213) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.04213) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://fulldit2.github.io/)

- [Hollywood Town: Long-Video Generation via Cross-Modal Multi-Agent Orchestration](https://arxiv.org/abs/2510.22431) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.22431)

- [Latent Collaboration in Multi-Agent Systems](https://arxiv.org/abs/2511.20639) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Gen-Verse/LatentMAS.svg?style=social&label=Star)](https://github.com/Gen-Verse/LatentMAS) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.20639)

- [LongAnimation: Long Animation Generation with Dynamic Global-Local Memory](https://arxiv.org/abs/2507.01945) — **2025 · 2025 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/CN-makers/LongAnimation.svg?style=social&label=Star)](https://github.com/CN-makers/LongAnimation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.01945) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://cn-makers.github.io/long_animation_web/)

- [Manimator: Transforming Research Papers into Visual Explanations](https://arxiv.org/abs/2507.14306) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.14306)

- [MasRouter: Learning to Route LLMs for Multi-Agent Systems](https://doi.org/10.18653/v1/2025.acl-long.757) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/yanweiyue/masrouter.svg?style=social&label=Star)](https://github.com/yanweiyue/masrouter) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2025.acl-long.757)

- [MG-Gen: Single Image to Motion Graphics Generation](https://arxiv.org/abs/2504.02361) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CyberAgentAILab/MG-GEN.svg?style=social&label=Star)](https://github.com/CyberAgentAILab/MG-GEN) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.02361)

- [Model Context Protocol Specification: Tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) — **2025 · Online resource**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)

- [MotionAgent: Fine-grained Controllable Video Generation via Motion Field Agent](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/leoisufa/MotionAgent.svg?style=social&label=Star)](https://github.com/leoisufa/MotionAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html)

- [MoVer: Motion Verification for Motion Graphics Animations](https://arxiv.org/abs/2502.13372) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/jama1017/MoVer.svg?style=social&label=Star)](https://github.com/jama1017/MoVer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.13372) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mover-dsl.github.io/)

- [Paper2Video: Automatic Video Generation from Scientific Papers](https://arxiv.org/abs/2510.05096) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Paper2Video.svg?style=social&label=Star)](https://github.com/showlab/Paper2Video) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.05096) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/Paper2Video/)

- [Preacher: Paper-to-Video Agentic System](https://arxiv.org/abs/2508.09632) — **2025 · 2025 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/Gen-Verse/Paper2Video.svg?style=social&label=Star)](https://github.com/Gen-Verse/Paper2Video) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2508.09632)

- [PresentAgent: Multimodal Agent for Presentation Video Generation](https://doi.org/10.18653/v1/2025.emnlp-demos.58) — **2025 · Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing: System Demonstrations**<br>
  [![Star](https://img.shields.io/github/stars/AIGeeksGroup/PresentAgent.svg?style=social&label=Star)](https://github.com/AIGeeksGroup/PresentAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2025.emnlp-demos.58)

- [Spotlight: Identifying and Localizing Video Generation Errors Using VLMs](https://arxiv.org/abs/2511.18102) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.18102) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://spotlight-video.github.io/)

- [StoryMem: Multi-shot Long Video Storytelling with Memory](https://arxiv.org/abs/2512.19539) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Kevin-thu/StoryMem.svg?style=social&label=Star)](https://github.com/Kevin-thu/StoryMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.19539) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kevin-thu.github.io/StoryMem)

- [SVBench: Evaluation of Video Generation Models on Social Reasoning](https://arxiv.org/abs/2512.21507) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Gloria2tt/SVBench-Evaluation.svg?style=social&label=Star)](https://github.com/Gloria2tt/SVBench-Evaluation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.21507)

- [UniVA: Universal Video Agent towards Open-Source Next-Generation Video Generalist](https://arxiv.org/abs/2511.08521) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.08521)

- [Video World Models with Long-term Spatial Memory](https://arxiv.org/abs/2506.05284) — **2025 · Advances in Neural Information Processing Systems 38**<br>
  [![Star](https://img.shields.io/github/stars/spmem/spmem.svg?style=social&label=Star)](https://github.com/spmem/spmem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.05284) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://spmem.github.io/)

- [Video-As-Prompt: Unified Semantic Control for Video Generation](https://arxiv.org/abs/2510.20888) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/bytedance/Video-As-Prompt.svg?style=social&label=Star)](https://github.com/bytedance/Video-As-Prompt) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.20888) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://bytedance.github.io/Video-As-Prompt)

- [VideoTree: Adaptive Tree-based Video Representation for LLM Reasoning on Long Videos](https://arxiv.org/abs/2405.19209) — **2025 · CVPR**<br>
  [![Star](https://img.shields.io/github/stars/Ziyang412/VideoTree.svg?style=social&label=Star)](https://github.com/Ziyang412/VideoTree) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.19209) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videotree2024.github.io/)

- [VMem: Consistent Interactive Video Scene Generation with Surfel-Indexed View Memory](https://arxiv.org/abs/2506.18903) — **2025 · 2025 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/runjiali-rl/vmem.svg?style=social&label=Star)](https://github.com/runjiali-rl/vmem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.18903) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://v-mem.github.io)

- [WorldMem: Long-term Consistent World Simulation with Memory](https://arxiv.org/abs/2504.12369) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xizaoqu/WorldMem.svg?style=social&label=Star)](https://github.com/xizaoqu/WorldMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.12369) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://xizaoqu.github.io/worldmem/)

- [WorldWander: Bridging Egocentric and Exocentric Worlds in Video Generation](https://arxiv.org/abs/2511.22098) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/WorldWander.svg?style=social&label=Star)](https://github.com/showlab/WorldWander) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.22098)

- [AesopAgent: Agent-driven Evolutionary System on Story-to-Video Production](https://arxiv.org/abs/2403.07952) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.07952) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://aesopai.github.io/)

- [AICL: Action In-Context Learning for Video Diffusion Model](https://arxiv.org/abs/2403.11535) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.11535)

- [Anim-Director: A Large Multimodal Model Powered Agent for Controllable Animation Video Generation](https://doi.org/10.1145/3680528.3687688) — **2024 · SIGGRAPH Asia 2024: Conference Papers**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/Anim-Director.svg?style=social&label=Star)](https://github.com/HITsz-TMG/Anim-Director/tree/main/Anim-Director) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3680528.3687688)

- [AssistEditor: Multi-Agent Collaboration for GUI Workflow Automation in Video Creation](https://doi.org/10.1145/3664647.3684998) — **2024 · Proceedings of the 32nd ACM International Conference on Multimedia**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3664647.3684998)

- [ComfyBench: Benchmarking LLM-based Agents in ComfyUI for Autonomously Designing Collaborative AI Systems](https://arxiv.org/abs/2409.01392) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xxyQwQ/ComfyBench.svg?style=social&label=Star)](https://github.com/xxyQwQ/ComfyBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2409.01392)

- [DreamFactory: Pioneering Multi-Scene Long Video Generation with a Multi-Agent Framework](https://arxiv.org/abs/2408.11788) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.11788)

- [DreamRunner: Fine-Grained Compositional Story-to-Video Generation with Retrieval-Augmented Motion Adaptation](https://arxiv.org/abs/2411.16657) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/wz0919/DreamRunner.svg?style=social&label=Star)](https://github.com/wz0919/DreamRunner) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.16657) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://zunwang1.github.io/DreamRunner)

- [ExpeL: LLM Agents Are Experiential Learners](https://doi.org/10.1609/aaai.v38i17.29936) — **2024 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Star](https://img.shields.io/github/stars/LeapLabTHU/ExpeL.svg?style=social&label=Star)](https://github.com/LeapLabTHU/ExpeL) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v38i17.29936)

- [From Data to Story: Towards Automatic Animated Data Video Creation with LLM-based Multi-Agent Systems](https://arxiv.org/abs/2408.03876) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.03876)

- [GPT4Motion: Scripting Physical Motions in Text-to-Video Generation via Blender-Oriented GPT Planning](https://arxiv.org/abs/2311.12631) — **2024 · 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)**<br>
  [![Star](https://img.shields.io/github/stars/jiaxilv/GPT4Motion.svg?style=social&label=Star)](https://github.com/jiaxilv/GPT4Motion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.12631) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gpt4motion.github.io/)

- [Keyframer: Empowering Animation Design using Large Language Models](https://arxiv.org/abs/2402.06071) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/apple/ml-keyframer.svg?style=social&label=Star)](https://github.com/apple/ml-keyframer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.06071)

- [Kubrick: Multimodal Agent Collaborations for Synthetic Video Generation](https://arxiv.org/abs/2408.10453) — **2024 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.10453)

- [Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models](https://arxiv.org/abs/2310.04406) — **2024 · ICML**<br>
  [![Star](https://img.shields.io/github/stars/lapisrocks/LanguageAgentTreeSearch.svg?style=social&label=Star)](https://github.com/lapisrocks/LanguageAgentTreeSearch) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.04406)

- [LAVE: LLM-Powered Agent Assistance and Language Augmentation for Video Editing](https://doi.org/10.1145/3640543.3645143) — **2024 · IUI 2024**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3640543.3645143) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.dgp.toronto.edu/~bryanw/lave/)

- [LLM-grounded Video Diffusion Models](https://arxiv.org/abs/2309.17444) — **2024 · ICLR**<br>
  [![Star](https://img.shields.io/github/stars/TonyLianLong/LLM-groundedVideoDiffusion.svg?style=social&label=Star)](https://github.com/TonyLianLong/LLM-groundedVideoDiffusion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.17444) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://llm-grounded-video-diffusion.github.io/)

- [MA-LMM: Memory-Augmented Large Multimodal Model for Long-Term Video Understanding](https://arxiv.org/abs/2404.05726) — **2024 · CVPR**<br>
  [![Star](https://img.shields.io/github/stars/boheumd/MA-LMM.svg?style=social&label=Star)](https://github.com/boheumd/MA-LMM) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.05726) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://boheumd.github.io/MA-LMM/)

- [Mora: Enabling Generalist Video Generation via A Multi-Agent Framework](https://arxiv.org/abs/2403.13248) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/lichao-sun/Mora.svg?style=social&label=Star)](https://github.com/lichao-sun/Mora) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.13248)

- [More Agents Is All You Need](https://arxiv.org/abs/2402.05120) — **2024 · TMLR**<br>
  [![Star](https://img.shields.io/github/stars/MoreAgentsIsAllYouNeed/AgentForest.svg?style=social&label=Star)](https://github.com/MoreAgentsIsAllYouNeed/AgentForest) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.05120)

- [MovieChat: From Dense Token to Sparse Memory for Long Video Understanding](https://arxiv.org/abs/2307.16449) — **2024 · CVPR**<br>
  [![Star](https://img.shields.io/github/stars/wenhaochai/MovieChat.svg?style=social&label=Star)](https://github.com/wenhaochai/MovieChat) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.16449)

- [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://arxiv.org/abs/2404.07972) — **2024 · NeurIPS**<br>
  [![Star](https://img.shields.io/github/stars/xlang-ai/OSWorld.svg?style=social&label=Star)](https://github.com/xlang-ai/OSWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.07972) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://os-world.github.io/)

- [ScreenAgent: A Vision Language Model-driven Computer Control Agent](https://arxiv.org/abs/2402.07945) — **2024 · Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence (IJCAI-24)**<br>
  [![Star](https://img.shields.io/github/stars/niuzaisheng/ScreenAgent.svg?style=social&label=Star)](https://github.com/niuzaisheng/ScreenAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.07945)

- [StoryAgent: Customized Storytelling Video Generation via Multi-Agent Collaboration](https://arxiv.org/abs/2411.04925) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.04925) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://github.com/storyagent123/Comparison-of-storytelling-video-results)

- [Video Diffusion Transformers are In-Context Learners](https://arxiv.org/abs/2412.10783) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/feizc/Video-In-Context.svg?style=social&label=Star)](https://github.com/feizc/Video-In-Context) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.10783)

- [Video In-context Learning: Autoregressive Transformers are Zero-Shot Video Imitators](https://arxiv.org/abs/2407.07356) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.07356)

- [VideoAgent: A Memory-augmented Multimodal Agent for Video Understanding](https://arxiv.org/abs/2403.11481) — **2024 · ECCV**<br>
  [![Star](https://img.shields.io/github/stars/YueFan1014/VideoAgent.svg?style=social&label=Star)](https://github.com/YueFan1014/VideoAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.11481) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videoagent.github.io/)

- [VideoAgent: Self-Improving Video Generation](https://arxiv.org/abs/2410.10076) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Video-as-Agent/VideoAgent.svg?style=social&label=Star)](https://github.com/Video-as-Agent/VideoAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.10076) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://video-as-agent.github.io/)

- [VideoDirectorGPT: Consistent Multi-scene Video Generation via LLM-Guided Planning](https://arxiv.org/abs/2309.15091) — **2024 · COLM**<br>
  [![Star](https://img.shields.io/github/stars/HL-hanlin/VideoDirectorGPT.svg?style=social&label=Star)](https://github.com/HL-hanlin/VideoDirectorGPT) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.15091) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videodirectorgpt.github.io)

- [VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://arxiv.org/abs/2406.10227) — **2024 · Advances in Neural Information Processing Systems 37**<br>
  [![Star](https://img.shields.io/github/stars/showlab/videogui.svg?style=social&label=Star)](https://github.com/showlab/videogui) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.10227) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/videogui/)

- [VideoStudio: Generating Consistent-Content and Multi-Scene Videos](https://arxiv.org/abs/2401.01256) — **2024 · ECCV**<br>
  [![Star](https://img.shields.io/github/stars/FuchenUSTC/VideoStudio.svg?style=social&label=Star)](https://github.com/FuchenUSTC/VideoStudio) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.01256)

- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) — **2024 · TMLR**<br>
  [![Star](https://img.shields.io/github/stars/MineDojo/Voyager.svg?style=social&label=Star)](https://github.com/MineDojo/Voyager) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.16291) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://voyager.minedojo.org/)

- [Free-Bloom: Zero-Shot Text-to-Video Generator with LLM Director and LDM Animator](https://arxiv.org/abs/2309.14494) — **2023 · NeurIPS**<br>
  [![Star](https://img.shields.io/github/stars/SooLab/Free-Bloom.svg?style=social&label=Star)](https://github.com/SooLab/Free-Bloom) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.14494)

- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) — **2023 · Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology**<br>
  [![Star](https://img.shields.io/github/stars/joonspk-research/generative_agents.svg?style=social&label=Star)](https://github.com/joonspk-research/generative_agents) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.03442)

- [Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — **2023 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/nelson-liu/lost-in-the-middle.svg?style=social&label=Star)](https://github.com/nelson-liu/lost-in-the-middle) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.03172)

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — **2023 · ICLR**<br>
  [![Star](https://img.shields.io/github/stars/ysymyth/ReAct.svg?style=social&label=Star)](https://github.com/ysymyth/ReAct) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.03629) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://react-lm.github.io)

- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) — **2023 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/noahshinn/reflexion.svg?style=social&label=Star)](https://github.com/noahshinn/reflexion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.11366)

- [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128) — **2023 · 2023 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/cvlab-columbia/viper.svg?style=social&label=Star)](https://github.com/cvlab-columbia/viper) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.08128) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://viper.cs.columbia.edu/)

- [Visual Programming: Compositional Visual Reasoning without Training](https://arxiv.org/abs/2211.11559) — **2023 · 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/allenai/visprog.svg?style=social&label=Star)](https://github.com/allenai/visprog) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2211.11559)

- [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/abs/2205.14135) — **2022 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HazyResearch/flash-attention.svg?style=social&label=Star)](https://github.com/HazyResearch/flash-attention) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2205.14135)

- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — **2020 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/openai/gpt-3.svg?style=social&label=Star)](https://github.com/openai/gpt-3) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2005.14165)

- [Agent Skills Specification](https://agentskills.io/specification) — **n.d. · Living specification**<br>
  [![Star](https://img.shields.io/github/stars/agentskills/agentskills.svg?style=social&label=Star)](https://github.com/agentskills/agentskills/tree/main/skills-ref) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://agentskills.io/specification)

- [Comfy MCP](https://docs.comfy.org/agent-tools/mcp) — **n.d. · Official documentation**<br>
  [![Star](https://img.shields.io/github/stars/Comfy-Org/comfy-mcp.svg?style=social&label=Star)](https://github.com/Comfy-Org/comfy-mcp) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://docs.comfy.org/agent-tools/mcp)

- [Comfy Skills for Coding Agents](https://docs.comfy.org/agent-tools/skills) — **n.d. · Official documentation**<br>
  [![Star](https://img.shields.io/github/stars/Comfy-Org/comfy-skills.svg?style=social&label=Star)](https://github.com/Comfy-Org/comfy-skills) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://docs.comfy.org/agent-tools/skills)

- [ComfyUI Nodes: Types, Inputs, and Outputs](https://docs.comfy.org/basic-concepts/nodes) — **n.d. · Official documentation**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://docs.comfy.org/basic-concepts/nodes)

- [FilmSwarm: AI Agent Swarm for Film Pre-production](https://github.com/AiMakers-co/filmswarm) — **n.d. · Open-source project documentation**<br>
  [![Star](https://img.shields.io/github/stars/AiMakers-co/filmswarm.svg?style=social&label=Star)](https://github.com/AiMakers-co/filmswarm) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://github.com/AiMakers-co/filmswarm)

- [Livepeer Youtube Video Generator Swarm](https://docs.swarmzero.ai/examples/swarms/livepeer-youtube-video-generator-swarm) — **n.d. · Implementation tutorial**<br>
  [![Star](https://img.shields.io/github/stars/swarmzero/examples.svg?style=social&label=Star)](https://github.com/swarmzero/examples) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://docs.swarmzero.ai/examples/swarms/livepeer-youtube-video-generator-swarm)

### Agent Experience and Skill Reuse

- [A$^2$RD: Agentic Autoregressive Diffusion for Long Video Consistency](https://arxiv.org/abs/2605.06924) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.06924) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://dxlong2000.github.io/AARD)

- [Action Agent: Agentic Video Generation Meets Flow-Constrained Diffusion](https://arxiv.org/abs/2605.01477) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.01477)

- [AgenticGen: Reward-Guided Agentic Video Generation for Advertising](https://arxiv.org/abs/2609.09187) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.09187)

- [CineForge: Self-Improving Agents for Long-Horizon Video Generation](https://arxiv.org/abs/2608.29621) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.29621)

- [Identity-Preserving Text-to-Video Generation via Agentic Enhancement and Semantic Repair](https://arxiv.org/abs/2608.20749) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/oceanflowlab/AESR.svg?style=social&label=Star)](https://github.com/oceanflowlab/AESR) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.20749)

- [Recommendation as Generation: Unifying Personalized Video Generation and Recommendation at Industrial Scale](https://arxiv.org/abs/2606.25496) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.25496) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://recommendation-as-generation.github.io/)

- [SPIRAL: Self-Evolving Action-Conditioned Video Generation via Reflective Planning Agents](https://arxiv.org/abs/2603.08403) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.08403) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://yuyang-cloud.github.io/spiral)

- [VideoGen-Agent: Reinforcing Video Generation Agents](https://arxiv.org/abs/2609.24997) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24997) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://andyca111.github.io/VideoGen_Agent/)

- [VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation](https://arxiv.org/abs/2606.08091) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/JianhuiWei7/VideoWeaver.svg?style=social&label=Star)](https://github.com/JianhuiWei7/VideoWeaver) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.08091)

- [Agent Workflow Memory](https://proceedings.mlr.press/v267/wang25bx.html) — **2025 · Proceedings of the 42nd International Conference on Machine Learning**<br>
  [![Star](https://img.shields.io/github/stars/zorazrw/agent-workflow-memory.svg?style=social&label=Star)](https://github.com/zorazrw/agent-workflow-memory) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v267/wang25bx.html)

- [Model Context Protocol Specification: Tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) — **2025 · Online resource**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)

- [AesopAgent: Agent-driven Evolutionary System on Story-to-Video Production](https://arxiv.org/abs/2403.07952) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.07952) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://aesopai.github.io/)

- [DreamRunner: Fine-Grained Compositional Story-to-Video Generation with Retrieval-Augmented Motion Adaptation](https://arxiv.org/abs/2411.16657) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/wz0919/DreamRunner.svg?style=social&label=Star)](https://github.com/wz0919/DreamRunner) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.16657) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://zunwang1.github.io/DreamRunner)

- [ExpeL: LLM Agents Are Experiential Learners](https://doi.org/10.1609/aaai.v38i17.29936) — **2024 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Star](https://img.shields.io/github/stars/LeapLabTHU/ExpeL.svg?style=social&label=Star)](https://github.com/LeapLabTHU/ExpeL) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v38i17.29936)

- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) — **2024 · TMLR**<br>
  [![Star](https://img.shields.io/github/stars/MineDojo/Voyager.svg?style=social&label=Star)](https://github.com/MineDojo/Voyager) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.16291) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://voyager.minedojo.org/)

- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — **2020 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/openai/gpt-3.svg?style=social&label=Star)](https://github.com/openai/gpt-3) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2005.14165)

- [Agent Skills Specification](https://agentskills.io/specification) — **n.d. · Living specification**<br>
  [![Star](https://img.shields.io/github/stars/agentskills/agentskills.svg?style=social&label=Star)](https://github.com/agentskills/agentskills/tree/main/skills-ref) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://agentskills.io/specification)

- [Comfy MCP](https://docs.comfy.org/agent-tools/mcp) — **n.d. · Official documentation**<br>
  [![Star](https://img.shields.io/github/stars/Comfy-Org/comfy-mcp.svg?style=social&label=Star)](https://github.com/Comfy-Org/comfy-mcp) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://docs.comfy.org/agent-tools/mcp)

- [Comfy Skills for Coding Agents](https://docs.comfy.org/agent-tools/skills) — **n.d. · Official documentation**<br>
  [![Star](https://img.shields.io/github/stars/Comfy-Org/comfy-skills.svg?style=social&label=Star)](https://github.com/Comfy-Org/comfy-skills) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://docs.comfy.org/agent-tools/skills)

### Foundational Agent Capabilities

- [AgentMV: A State-Guided Multi-Agent Framework for Budget-Aware Music Video Generation](https://arxiv.org/abs/2605.10723) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.10723)

- [ATVG: Agentic System for Factually Grounded Travel Advertisement Video Generation](https://doi.org/10.1145/3805712.3808387) — **2026 · Proceedings of the 49th International ACM SIGIR Conference on Research and Development in Information Retrieval**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3805712.3808387)

- [Beyond Coherence: Benchmarking Professional Editing-Technique Execution in Multi-Shot Audio-Video Generation](https://arxiv.org/abs/2609.08275) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AlibabaResearch/cut-craft-bench.svg?style=social&label=Star)](https://github.com/AlibabaResearch/cut-craft-bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.08275)

- [Bridging Creative Intent and Visual Quality: Creator-Driven Recurrent Video Generation with Agentic Feedback Loops](https://arxiv.org/abs/2606.18591) — **2026 · ICML Workshop on Human-AI Co-Creativity**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.18591)

- [Camera Artist: A Multi-Agent Framework for Cinematic Language Storytelling Video Generation](https://arxiv.org/abs/2604.09195) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.09195)

- [CamPilot: A Multi-Agent Cinematic Assistant for Camera-Controlled Movie Generation](https://arxiv.org/abs/2609.10943) — **2026 · EMNLP REALM Workshop**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.10943)

- [CANVAS: Continuity-Aware Narratives via Visual Agentic Storyboarding](https://arxiv.org/abs/2604.13452) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.13452)

- [CineAGI: Character-Consistent Movie Creation through LLM-Orchestrated Multi-Modal Generation and Cross-Scene Integration](https://arxiv.org/abs/2604.23579) — **2026 · ICME**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.23579)

- [Co-Director: Agentic Generative Video Storytelling](https://arxiv.org/abs/2604.24842) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GoogleCloudPlatform/genmedia-izumi-agent.svg?style=social&label=Star)](https://github.com/GoogleCloudPlatform/genmedia-izumi-agent/tree/main/demos/backend/ads_codirector) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.24842) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://co-director-agent.github.io/)

- [DramaDirector: Geometry-Guided Short Drama Generation](https://arxiv.org/abs/2606.24107) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/iLearn-Lab/DramaDirector.svg?style=social&label=Star)](https://github.com/iLearn-Lab/DramaDirector) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.24107)

- [EM-Vid: Training-Free Entity-Centric Memory for Efficient and Consistent Multi-Shot Video Generation](https://arxiv.org/abs/2605.23610) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.23610)

- [EvoState: Closed-Loop Visual State Management for Long-Form Video Generation](https://arxiv.org/abs/2606.16184) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.16184)

- [FilmWeaver: Weaving Consistent Multi-Shot Videos with Cache-Guided Autoregressive Diffusion](https://doi.org/10.1609/aaai.v40i9.37711) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i9.37711) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://luoxyhappy.github.io/FilmWeaver/)

- [FilmWorld: Agentic Novel-to-Film Generation through Dynamic Cinematic World Modeling](https://arxiv.org/abs/2607.19038) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.19038) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://filmworld-ai.github.io)

- [FreeMem: Enhancing Consistency in Long Video Generation via Tuning-Free Memory](https://doi.org/10.1609/aaai.v40i10.37783) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i10.37783)

- [GroundShot: Visually Consistent Multi-Shot Long Video Generation via Entity-Grounded Shot Scheduling](https://arxiv.org/abs/2606.20799) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20799)

- [InteracVid: Building a Real Interactive Audio-Visual Response Dataset from Live-Chat Videos](https://arxiv.org/abs/2608.01157) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/InteracVid/InteracVid.svg?style=social&label=Star)](https://github.com/InteracVid/InteracVid) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.01157)

- [MAViS: A Multi-Agent Framework for Long-Sequence Video Storytelling](https://aclanthology.org/2026.eacl-long.101/) — **2026 · Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.eacl-long.101/)

- [Memento: Reconstruct to Remember for Consistent Long Video Generation](https://arxiv.org/abs/2606.14667) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/ernie-research/Memento.svg?style=social&label=Star)](https://github.com/ernie-research/Memento) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.14667) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://ernie-research.github.io/Memento/)

- [Memory-V2V: Memory-Augmented Video-to-Video Diffusion for Consistent Multi-turn Editing](https://doi.org/10.1007/978-3-032-37324-3_5) — **2026 · Computer Vision -- ECCV 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1007/978-3-032-37324-3_5)

- [MemRoPE: Training-Free Infinite Video Generation via Evolving Memory Tokens](https://doi.org/10.1007/978-3-032-37356-4_14) — **2026 · Computer Vision -- ECCV 2026**<br>
  [![Star](https://img.shields.io/github/stars/YoungRaeKimm/MemRoPE.svg?style=social&label=Star)](https://github.com/YoungRaeKimm/MemRoPE) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1007/978-3-032-37356-4_14)

- [MVWeaver: A Hierarchical Music Video Generation Agent with a Learned Song-to-Visual Bridge](https://arxiv.org/abs/2609.06478) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.06478)

- [OneStory: Coherent Multi-Shot Video Generation with Adaptive Memory](https://openaccess.thecvf.com/content/CVPR2026/html/An_OneStory_Coherent_Multi-Shot_Video_Generation_with_Adaptive_Memory_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/An_OneStory_Coherent_Multi-Shot_Video_Generation_with_Adaptive_Memory_CVPR_2026_paper.html)

- [ReCA: Multi-Shot Long Video Extrapolation via Recursive Context Allocation](https://arxiv.org/abs/2605.26525) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.26525)

- [Ring Forcing: Towards Precise Long-Term Memory for Autoregressive Video Diffusion](https://doi.org/10.1007/978-3-032-37602-2_13) — **2026 · Computer Vision -- ECCV 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1007/978-3-032-37602-2_13)

- [Soap2Soap: Long Cinematic Video Remaking via Multi-Agent Collaboration](https://arxiv.org/abs/2605.17423) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Soap2Soap.svg?style=social&label=Star)](https://github.com/showlab/Soap2Soap) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.17423)

- [VideoArgus: Agentic Rubric-Grounded Unified Evaluation for Video Generation and Editing](https://arxiv.org/abs/2608.05485) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.05485) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://zzzmyyzeng.github.io/VideoArgus)

- [VideoCreator: An Agentic System for Multi-turn Video Production](https://doi.org/10.1145/3805622.3810431) — **2026 · Proceedings of the 2026 International Conference on Multimedia Retrieval**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3805622.3810431)

- [VideoMemory: Toward Consistent Video Generation via Memory Integration](https://arxiv.org/abs/2601.03655) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/EnVision-Research/VideoMemory.svg?style=social&label=Star)](https://github.com/EnVision-Research/VideoMemory) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.03655) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://hit-perfect.github.io/VideoMemory/)

- [ViMax: Agentic Video Generation](https://arxiv.org/abs/2606.07649) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HKUDS/ViMax.svg?style=social&label=Star)](https://github.com/HKUDS/ViMax) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.07649)

- [VQQA: An Agentic Approach for Video Evaluation and Quality Improvement](https://arxiv.org/abs/2603.12310) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.12310)

- [AIGVE-MACS: Unified Multi-Aspect Commenting and Scoring Model for AI-Generated Video Evaluation](https://arxiv.org/abs/2507.01255) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.01255)

- [AniMaker: Multi-Agent Animated Storytelling with MCTS-Driven Clip Generation](https://animaker-dev.github.io/) — **2025 · SIGGRAPH Asia 2025: Conference Papers**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/Anim-Director.svg?style=social&label=Star)](https://github.com/HITsz-TMG/Anim-Director/tree/main/AniMaker) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://animaker-dev.github.io/)

- [Automated Movie Generation via Multi-Agent CoT Planning](https://arxiv.org/abs/2503.07314) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/showlab/MovieAgent.svg?style=social&label=Star)](https://github.com/showlab/MovieAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.07314) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://weijiawu.github.io/MovieAgent)

- [AutoMV: An Automatic Multi-Agent System for Music Video Generation](https://arxiv.org/abs/2512.12196) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/multimodal-art-projection/AutoMV.svg?style=social&label=Star)](https://github.com/multimodal-art-projection/AutoMV) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.12196)

- [AutoMV: An Autonomous Agent Framework for Real Estate Marketing Video Generation](https://doi.org/10.1609/aaai.v39i28.35377) — **2025 · AAAI 2025: Demonstration Track**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v39i28.35377)

- [Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval](https://arxiv.org/abs/2506.03141) — **2025 · Proceedings of the SIGGRAPH Asia 2025 Conference Papers**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.03141) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://context-as-memory.github.io/)

- [Corgi: Cached Memory Guided Video Generation](https://doi.org/10.1109/WACV61041.2025.00450) — **2025 · 2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1109/WACV61041.2025.00450)

- [LongAnimation: Long Animation Generation with Dynamic Global-Local Memory](https://arxiv.org/abs/2507.01945) — **2025 · 2025 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/CN-makers/LongAnimation.svg?style=social&label=Star)](https://github.com/CN-makers/LongAnimation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.01945) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://cn-makers.github.io/long_animation_web/)

- [MotionAgent: Fine-grained Controllable Video Generation via Motion Field Agent](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/leoisufa/MotionAgent.svg?style=social&label=Star)](https://github.com/leoisufa/MotionAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/html/Liao_MotionAgent_Fine-grained_Controllable_Video_Generation_via_Motion_Field_Agent_ICCV_2025_paper.html)

- [Preacher: Paper-to-Video Agentic System](https://arxiv.org/abs/2508.09632) — **2025 · 2025 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/Gen-Verse/Paper2Video.svg?style=social&label=Star)](https://github.com/Gen-Verse/Paper2Video) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2508.09632)

- [PresentAgent: Multimodal Agent for Presentation Video Generation](https://doi.org/10.18653/v1/2025.emnlp-demos.58) — **2025 · Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing: System Demonstrations**<br>
  [![Star](https://img.shields.io/github/stars/AIGeeksGroup/PresentAgent.svg?style=social&label=Star)](https://github.com/AIGeeksGroup/PresentAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2025.emnlp-demos.58)

- [StoryMem: Multi-shot Long Video Storytelling with Memory](https://arxiv.org/abs/2512.19539) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Kevin-thu/StoryMem.svg?style=social&label=Star)](https://github.com/Kevin-thu/StoryMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.19539) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kevin-thu.github.io/StoryMem)

- [SVBench: Evaluation of Video Generation Models on Social Reasoning](https://arxiv.org/abs/2512.21507) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Gloria2tt/SVBench-Evaluation.svg?style=social&label=Star)](https://github.com/Gloria2tt/SVBench-Evaluation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.21507)

- [UniVA: Universal Video Agent towards Open-Source Next-Generation Video Generalist](https://arxiv.org/abs/2511.08521) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.08521)

- [Video World Models with Long-term Spatial Memory](https://arxiv.org/abs/2506.05284) — **2025 · Advances in Neural Information Processing Systems 38**<br>
  [![Star](https://img.shields.io/github/stars/spmem/spmem.svg?style=social&label=Star)](https://github.com/spmem/spmem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.05284) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://spmem.github.io/)

- [VideoTree: Adaptive Tree-based Video Representation for LLM Reasoning on Long Videos](https://arxiv.org/abs/2405.19209) — **2025 · CVPR**<br>
  [![Star](https://img.shields.io/github/stars/Ziyang412/VideoTree.svg?style=social&label=Star)](https://github.com/Ziyang412/VideoTree) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.19209) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videotree2024.github.io/)

- [VMem: Consistent Interactive Video Scene Generation with Surfel-Indexed View Memory](https://arxiv.org/abs/2506.18903) — **2025 · 2025 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/runjiali-rl/vmem.svg?style=social&label=Star)](https://github.com/runjiali-rl/vmem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.18903) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://v-mem.github.io)

- [WorldMem: Long-term Consistent World Simulation with Memory](https://arxiv.org/abs/2504.12369) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xizaoqu/WorldMem.svg?style=social&label=Star)](https://github.com/xizaoqu/WorldMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.12369) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://xizaoqu.github.io/worldmem/)

- [Anim-Director: A Large Multimodal Model Powered Agent for Controllable Animation Video Generation](https://doi.org/10.1145/3680528.3687688) — **2024 · SIGGRAPH Asia 2024: Conference Papers**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/Anim-Director.svg?style=social&label=Star)](https://github.com/HITsz-TMG/Anim-Director/tree/main/Anim-Director) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3680528.3687688)

- [DreamFactory: Pioneering Multi-Scene Long Video Generation with a Multi-Agent Framework](https://arxiv.org/abs/2408.11788) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.11788)

- [Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models](https://arxiv.org/abs/2310.04406) — **2024 · ICML**<br>
  [![Star](https://img.shields.io/github/stars/lapisrocks/LanguageAgentTreeSearch.svg?style=social&label=Star)](https://github.com/lapisrocks/LanguageAgentTreeSearch) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.04406)

- [LLM-grounded Video Diffusion Models](https://arxiv.org/abs/2309.17444) — **2024 · ICLR**<br>
  [![Star](https://img.shields.io/github/stars/TonyLianLong/LLM-groundedVideoDiffusion.svg?style=social&label=Star)](https://github.com/TonyLianLong/LLM-groundedVideoDiffusion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.17444) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://llm-grounded-video-diffusion.github.io/)

- [MA-LMM: Memory-Augmented Large Multimodal Model for Long-Term Video Understanding](https://arxiv.org/abs/2404.05726) — **2024 · CVPR**<br>
  [![Star](https://img.shields.io/github/stars/boheumd/MA-LMM.svg?style=social&label=Star)](https://github.com/boheumd/MA-LMM) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.05726) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://boheumd.github.io/MA-LMM/)

- [MovieChat: From Dense Token to Sparse Memory for Long Video Understanding](https://arxiv.org/abs/2307.16449) — **2024 · CVPR**<br>
  [![Star](https://img.shields.io/github/stars/wenhaochai/MovieChat.svg?style=social&label=Star)](https://github.com/wenhaochai/MovieChat) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.16449)

- [StoryAgent: Customized Storytelling Video Generation via Multi-Agent Collaboration](https://arxiv.org/abs/2411.04925) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.04925) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://github.com/storyagent123/Comparison-of-storytelling-video-results)

- [VideoAgent: A Memory-augmented Multimodal Agent for Video Understanding](https://arxiv.org/abs/2403.11481) — **2024 · ECCV**<br>
  [![Star](https://img.shields.io/github/stars/YueFan1014/VideoAgent.svg?style=social&label=Star)](https://github.com/YueFan1014/VideoAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.11481) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videoagent.github.io/)

- [VideoDirectorGPT: Consistent Multi-scene Video Generation via LLM-Guided Planning](https://arxiv.org/abs/2309.15091) — **2024 · COLM**<br>
  [![Star](https://img.shields.io/github/stars/HL-hanlin/VideoDirectorGPT.svg?style=social&label=Star)](https://github.com/HL-hanlin/VideoDirectorGPT) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.15091) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://videodirectorgpt.github.io)

- [VideoStudio: Generating Consistent-Content and Multi-Scene Videos](https://arxiv.org/abs/2401.01256) — **2024 · ECCV**<br>
  [![Star](https://img.shields.io/github/stars/FuchenUSTC/VideoStudio.svg?style=social&label=Star)](https://github.com/FuchenUSTC/VideoStudio) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.01256)

- [Free-Bloom: Zero-Shot Text-to-Video Generator with LLM Director and LDM Animator](https://arxiv.org/abs/2309.14494) — **2023 · NeurIPS**<br>
  [![Star](https://img.shields.io/github/stars/SooLab/Free-Bloom.svg?style=social&label=Star)](https://github.com/SooLab/Free-Bloom) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.14494)

- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) — **2023 · Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology**<br>
  [![Star](https://img.shields.io/github/stars/joonspk-research/generative_agents.svg?style=social&label=Star)](https://github.com/joonspk-research/generative_agents) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.03442)

- [Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — **2023 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/nelson-liu/lost-in-the-middle.svg?style=social&label=Star)](https://github.com/nelson-liu/lost-in-the-middle) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.03172)

- [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/abs/2205.14135) — **2022 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HazyResearch/flash-attention.svg?style=social&label=Star)](https://github.com/HazyResearch/flash-attention) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2205.14135)

### Feedback-Guided Agent Control

- [AgentMV: A State-Guided Multi-Agent Framework for Budget-Aware Music Video Generation](https://arxiv.org/abs/2605.10723) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.10723)

- [Beyond Trial-and-Error: Agentic Optimization for Image-to-Video Adherence](https://arxiv.org/abs/2608.12290) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.12290)

- [Bridging Creative Intent and Visual Quality: Creator-Driven Recurrent Video Generation with Agentic Feedback Loops](https://arxiv.org/abs/2606.18591) — **2026 · ICML Workshop on Human-AI Co-Creativity**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.18591)

- [DeepPresenter: Environment-Grounded Reflection for Agentic Presentation Generation](https://doi.org/10.18653/v1/2026.findings-acl.1578) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/icip-cas/PPTAgent.svg?style=social&label=Star)](https://github.com/icip-cas/PPTAgent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2026.findings-acl.1578)

- [DirectorBench: Diagnosing Long-Form Video Generation with Personalized Multi-Agent Evaluation](https://arxiv.org/abs/2605.30090) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/jiaminchen-1031/DirectorBench.svg?style=social&label=Star)](https://github.com/jiaminchen-1031/DirectorBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.30090)

- [GenMAC: Compositional Text-to-Video Generation with Multi-Agent Collaboration](https://doi.org/10.1609/aaai.v40i7.37418) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Star](https://img.shields.io/github/stars/Karine-Huang/GenMAC.svg?style=social&label=Star)](https://github.com/Karine-Huang/GenMAC) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i7.37418) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://karine-h.github.io/GenMAC/)

- [GroundShot: Visually Consistent Multi-Shot Long Video Generation via Entity-Grounded Shot Scheduling](https://arxiv.org/abs/2606.20799) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20799)

- [PhysAgent: Reflective Agentic Physics Control for Physically Plausible Video Generation](https://arxiv.org/abs/2607.16355) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/IApple233/PhysAgent.svg?style=social&label=Star)](https://github.com/IApple233/PhysAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.16355) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://iapple233.github.io/PhysAgent)

- [SCMAPR: Self-Correcting Multi-Agent Prompt Refinement for Complex-Scenario Text-to-Video Generation](https://aclanthology.org/2026.findings-acl.345/) — **2026 · Findings of the Association for Computational Linguistics: ACL 2026**<br>
  [![Star](https://img.shields.io/github/stars/HiThink-Research/SCMAPR.svg?style=social&label=Star)](https://github.com/HiThink-Research/SCMAPR) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.findings-acl.345/)

- [SimWorlds: A Multi-Agent System for Dynamic 3D Scene Creation](https://arxiv.org/abs/2607.01766) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.01766) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dynsimworlds.github.io/)

- [Soap2Soap: Long Cinematic Video Remaking via Multi-Agent Collaboration](https://arxiv.org/abs/2605.17423) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Soap2Soap.svg?style=social&label=Star)](https://github.com/showlab/Soap2Soap) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.17423)

- [Training and Agentic Inference Strategies for LLM-based Manim Animation Generation](https://arxiv.org/abs/2604.18364) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/SuienS/manim-trainer.svg?style=social&label=Star)](https://github.com/SuienS/manim-trainer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.18364)

- [VISTA: A Test-Time Self-Improving Video Generation Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://g-vista.github.io/)

- [VQ-Insight: Teaching VLMs for AI-Generated Video Quality Understanding via Progressive Visual Reinforcement Learning](https://doi.org/10.1609/aaai.v40i15.38285) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i15.38285)

- [VQQA: An Agentic Approach for Video Evaluation and Quality Improvement](https://arxiv.org/abs/2603.12310) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.12310)

- [Evaluation Agent: Efficient and Promptable Evaluation Framework for Visual Generative Models](https://aclanthology.org/2025.acl-long.374/) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/Evaluation-Agent.svg?style=social&label=Star)](https://github.com/Vchitect/Evaluation-Agent) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2025.acl-long.374/)

- [MoVer: Motion Verification for Motion Graphics Animations](https://arxiv.org/abs/2502.13372) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/jama1017/MoVer.svg?style=social&label=Star)](https://github.com/jama1017/MoVer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.13372) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mover-dsl.github.io/)

- [Spotlight: Identifying and Localizing Video Generation Errors Using VLMs](https://arxiv.org/abs/2511.18102) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.18102) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://spotlight-video.github.io/)

- [VideoAgent: Self-Improving Video Generation](https://arxiv.org/abs/2410.10076) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Video-as-Agent/VideoAgent.svg?style=social&label=Star)](https://github.com/Video-as-Agent/VideoAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.10076) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://video-as-agent.github.io/)

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — **2023 · ICLR**<br>
  [![Star](https://img.shields.io/github/stars/ysymyth/ReAct.svg?style=social&label=Star)](https://github.com/ysymyth/ReAct) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.03629) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://react-lm.github.io)

- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) — **2023 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/noahshinn/reflexion.svg?style=social&label=Star)](https://github.com/noahshinn/reflexion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.11366)

### Multi-Agent Organization

- [AgentMV: A State-Guided Multi-Agent Framework for Budget-Aware Music Video Generation](https://arxiv.org/abs/2605.10723) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.10723)

- [Better Call CineCrew: Consistent Ultra-Long Narrative-to-Film Generation](https://arxiv.org/abs/2609.07720) — **2026 · ECCV**<br>
  [![Star](https://img.shields.io/github/stars/Ironieser/CineCrew.svg?style=social&label=Star)](https://github.com/Ironieser/CineCrew) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.07720) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://jiabenchen.github.io/cinecrew/)

- [DataMagic: Transforming Tabular Data into Data Insight Video](https://arxiv.org/abs/2606.20388) — **2026 · VLDB**<br>
  [![Star](https://img.shields.io/github/stars/HKUSTDial/DataMagic.svg?style=social&label=Star)](https://github.com/HKUSTDial/DataMagic) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20388) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://datamagic-home.github.io/)

- [FRAMEWORKERS: A Dynamic Multi-Agent Framework for AI-Generated Video Production](https://arxiv.org/abs/2608.29814) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.29814)

- [GenMAC: Compositional Text-to-Video Generation with Multi-Agent Collaboration](https://doi.org/10.1609/aaai.v40i7.37418) — **2026 · Proceedings of the AAAI Conference on Artificial Intelligence**<br>
  [![Star](https://img.shields.io/github/stars/Karine-Huang/GenMAC.svg?style=social&label=Star)](https://github.com/Karine-Huang/GenMAC) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1609/aaai.v40i7.37418) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://karine-h.github.io/GenMAC/)

- [MAViS: A Multi-Agent Framework for Long-Sequence Video Storytelling](https://aclanthology.org/2026.eacl-long.101/) — **2026 · Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.eacl-long.101/)

- [MVAgent: Multi-Agent Video Generation via Consistent Condition Construction and Shot-Level Policy Optimization](https://arxiv.org/abs/2609.30609) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.30609)

- [OmniDrive: An LLM-Choreographed Multi-Agent World Model with Unified Latent Co-Compression for Multi-View Driving Video Generation](https://arxiv.org/abs/2606.17536) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.17536)

- [One Sentence, One Drama: Personalized Short-Form Drama Generation via Multi-Agent Systems](https://arxiv.org/abs/2605.22144) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.22144)

- [Soap2Soap: Long Cinematic Video Remaking via Multi-Agent Collaboration](https://arxiv.org/abs/2605.17423) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Soap2Soap.svg?style=social&label=Star)](https://github.com/showlab/Soap2Soap) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.17423)

- [Streaming Multi-Agent Autoregressive Diffusion Model with World State Registers](https://arxiv.org/abs/2607.21594) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.21594) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vail-ucla.github.io/worldweaver/)

- [Vision Wormhole: Latent-Space Communication in Heterogeneous Multi-Agent Systems](https://arxiv.org/abs/2602.15382) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.15382)

- [AgentDropout: Dynamic Agent Elimination for Token-Efficient and High-Performance LLM-Based Multi-Agent Collaboration](https://doi.org/10.18653/v1/2025.acl-long.1170) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/wangzx1219/AgentDropout.svg?style=social&label=Star)](https://github.com/wangzx1219/AgentDropout) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2025.acl-long.1170)

- [Automated Movie Generation via Multi-Agent CoT Planning](https://arxiv.org/abs/2503.07314) — **2025 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/showlab/MovieAgent.svg?style=social&label=Star)](https://github.com/showlab/MovieAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.07314) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://weijiawu.github.io/MovieAgent)

- [ComfyGPT: A Self-Optimizing Multi-Agent System for Comprehensive ComfyUI Workflow Generation](https://arxiv.org/abs/2503.17671) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/comfygpt/comfygpt.svg?style=social&label=Star)](https://github.com/comfygpt/comfygpt) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.17671)

- [ComfyMind: Toward General-Purpose Generation via Tree-Based Planning and Reactive Feedback](https://arxiv.org/abs/2505.17908) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/LitaoGuo/ComfyMind.svg?style=social&label=Star)](https://github.com/LitaoGuo/ComfyMind) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.17908)

- [EditDuet: A Multi-Agent System for Video Non-Linear Editing](https://doi.org/10.1145/3721238.3730761) — **2025 · SIGGRAPH 2025: Conference Papers**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3721238.3730761) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mudtriangle.com/editduet)

- [FilmAgent: A Multi-Agent Framework for End-to-End Film Automation in Virtual 3D Spaces](https://arxiv.org/abs/2501.12909) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/VideoClaw.svg?style=social&label=Star)](https://github.com/HITsz-TMG/VideoClaw/tree/main/FilmAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.12909) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://filmagent.github.io/)

- [Hollywood Town: Long-Video Generation via Cross-Modal Multi-Agent Orchestration](https://arxiv.org/abs/2510.22431) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.22431)

- [Latent Collaboration in Multi-Agent Systems](https://arxiv.org/abs/2511.20639) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Gen-Verse/LatentMAS.svg?style=social&label=Star)](https://github.com/Gen-Verse/LatentMAS) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.20639)

- [MasRouter: Learning to Route LLMs for Multi-Agent Systems](https://doi.org/10.18653/v1/2025.acl-long.757) — **2025 · Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)**<br>
  [![Star](https://img.shields.io/github/stars/yanweiyue/masrouter.svg?style=social&label=Star)](https://github.com/yanweiyue/masrouter) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.18653/v1/2025.acl-long.757)

- [Paper2Video: Automatic Video Generation from Scientific Papers](https://arxiv.org/abs/2510.05096) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Paper2Video.svg?style=social&label=Star)](https://github.com/showlab/Paper2Video) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.05096) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/Paper2Video/)

- [ComfyBench: Benchmarking LLM-based Agents in ComfyUI for Autonomously Designing Collaborative AI Systems](https://arxiv.org/abs/2409.01392) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xxyQwQ/ComfyBench.svg?style=social&label=Star)](https://github.com/xxyQwQ/ComfyBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2409.01392)

- [Mora: Enabling Generalist Video Generation via A Multi-Agent Framework](https://arxiv.org/abs/2403.13248) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/lichao-sun/Mora.svg?style=social&label=Star)](https://github.com/lichao-sun/Mora) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.13248)

- [More Agents Is All You Need](https://arxiv.org/abs/2402.05120) — **2024 · TMLR**<br>
  [![Star](https://img.shields.io/github/stars/MoreAgentsIsAllYouNeed/AgentForest.svg?style=social&label=Star)](https://github.com/MoreAgentsIsAllYouNeed/AgentForest) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.05120)

- [FilmSwarm: AI Agent Swarm for Film Pre-production](https://github.com/AiMakers-co/filmswarm) — **n.d. · Open-source project documentation**<br>
  [![Star](https://img.shields.io/github/stars/AiMakers-co/filmswarm.svg?style=social&label=Star)](https://github.com/AiMakers-co/filmswarm) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://github.com/AiMakers-co/filmswarm)

- [Livepeer Youtube Video Generator Swarm](https://docs.swarmzero.ai/examples/swarms/livepeer-youtube-video-generator-swarm) — **n.d. · Implementation tutorial**<br>
  [![Star](https://img.shields.io/github/stars/swarmzero/examples.svg?style=social&label=Star)](https://github.com/swarmzero/examples) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://docs.swarmzero.ai/examples/swarms/livepeer-youtube-video-generator-swarm)

### Agent--Environment Interaction

- [Agents' Last Exam](https://arxiv.org/abs/2606.05405) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/rdi-berkeley/agents-last-exam.svg?style=social&label=Star)](https://github.com/rdi-berkeley/agents-last-exam) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.05405)

- [Beyond End-to-End Video Models: An LLM-Based Multi-Agent System for Educational Video Generation](https://doi.org/10.1145/3770855.3818323) — **2026 · KDD 2026: Applied Data Science, Vol. 2**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3770855.3818323)

- [CutClaw: Agentic Hours-Long Video Editing via Music Synchronization](https://arxiv.org/abs/2603.29664) — **2026 · Preprint**<br>
  [![Star](https://img.shields.io/github/stars/GVCLab/CutClaw.svg?style=social&label=Star)](https://github.com/GVCLab/CutClaw) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.29664)

- [CutVerse: A Compositional GUI Agents Benchmark for Media Post-Production Editing](https://arxiv.org/abs/2605.19484) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CUC-MIPG/CutVerse.svg?style=social&label=Star)](https://github.com/CUC-MIPG/CutVerse) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.19484)

- [DataMagic: Transforming Tabular Data into Data Insight Video](https://arxiv.org/abs/2606.20388) — **2026 · VLDB**<br>
  [![Star](https://img.shields.io/github/stars/HKUSTDial/DataMagic.svg?style=social&label=Star)](https://github.com/HKUSTDial/DataMagic) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20388) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://datamagic-home.github.io/)

- [ELLMPEG: An Edge-based Agentic LLM Video Processing Tool](https://doi.org/10.1145/3793853.3795760) — **2026 · ACM MMSys 2026**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3793853.3795760)

- [From Clay 3D Render to a Real Action Short: A 3D-to-AI Pipeline with Total Control](https://blog.fal.ai/from-clay-3d-render-to-a-real-action-short-a-3d-to-ai-pipeline-with-total-control/) — **2026 · fal.ai Blog**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://blog.fal.ai/from-clay-3d-render-to-a-real-action-short-a-3d-to-ai-pipeline-with-total-control/)

- [GPT-6 Astra: A New Generation of Intelligence](https://openai.com/index/gpt-6-astra/) — **2026 · Online resource**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openai.com/index/gpt-6-astra/)

- [Lighting-grounded Video Generation with Renderer-based Agent Reasoning](https://arxiv.org/abs/2604.07966) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.07966)

- [MoReGen: Multi-Agent Motion-Reasoning Engine for Code-based Text-to-Video Synthesis](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_MoReGen_Multi-Agent_Motion-Reasoning_Engine_for_Code-based_Text-to-Video_Synthesis_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_MoReGen_Multi-Agent_Motion-Reasoning_Engine_for_Code-based_Text-to-Video_Synthesis_CVPR_2026_paper.html)

- [Multi-Agent CAD Code Generation](https://doi.org/10.1145/3799902.3811067) — **2026 · ACM SIGGRAPH 2026 Conference Papers**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3799902.3811067)

- [MVAgent: Multi-Agent Video Generation via Consistent Condition Construction and Shot-Level Policy Optimization](https://arxiv.org/abs/2609.30609) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.30609)

- [NEWTON: Agentic Planning for Physically Grounded Video Generation](https://arxiv.org/abs/2605.18396) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CUTEPKQ/NEWTON.svg?style=social&label=Star)](https://github.com/CUTEPKQ/NEWTON) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18396) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://Newton026.github.io/newton)

- [One-take Creation, Flexible Referencing: Introducing Seedance 2.5](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5) — **2026 · Official product report**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5)

- [PhysPlan: Grounded Physical State Reasoning and Graph-Guided Optimization for Physically Plausible Video Generation](https://arxiv.org/abs/2609.13006) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.13006) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://physplan.github.io/)

- [Scene2Scene: LLM-driven 3D Spatial Blockout for Guided AI Video Synthesis](https://doi.org/10.1145/3807895.3807932) — **2026 · Companion Proceedings of the Symposium on Interactive 3D Graphics and Games**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3807895.3807932)

- [TeachMaster: Generative Teaching via Code](https://aclanthology.org/2026.acl-industry.7/) — **2026 · Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 6: Industry Track)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://aclanthology.org/2026.acl-industry.7/) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.teachmaster.cn/)

- [VideoAgent: All-in-One Framework for Video Understanding and Editing](https://arxiv.org/abs/2606.23327) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HKUDS/VideoAgent.svg?style=social&label=Star)](https://github.com/HKUDS/VideoAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.23327)

- [VideoCoCo: Code-as-CoT for Physically-Consistent Video Generation via an Agentic Dual-Engine System](https://arxiv.org/abs/2607.27380) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/micky-li-hd/VideoCoCo.svg?style=social&label=Star)](https://github.com/micky-li-hd/VideoCoCo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.27380)

- [VideoGen-Agent: Reinforcing Video Generation Agents](https://arxiv.org/abs/2609.24997) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24997) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://andyca111.github.io/VideoGen_Agent/)

- [VINCIE-NExT: Unlocking Video Editing from Images via In-Context Modeling](https://arxiv.org/abs/2610.12104) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/LgQu/VINCIE-NExT.svg?style=social&label=Star)](https://github.com/LgQu/VINCIE-NExT) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2610.12104) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vincie-next.github.io/)

- [VIPER: Visual In-Context Physics Reasoning for Physically Plausible Video Generation](https://arxiv.org/abs/2607.23472) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.23472)

- [World Narrative Model for Highly Controllable Video Generation: A Paradigm Shift from Pixel Sampling to Physical World Orchestration](https://arxiv.org/abs/2606.31946) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.31946)

- [3D Animation Generation Using Blender and Agentic AI](https://doi.org/10.5220/0014628000004852) — **2025 · Proceedings of the 1st International Conference on Interdisciplinary Technology & Science Convergence (FusionX Global)**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.5220/0014628000004852)

- [Code2Video: A Code-centric Paradigm for Educational Video Generation](https://arxiv.org/abs/2510.01174) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/Code2Video.svg?style=social&label=Star)](https://github.com/showlab/Code2Video) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.01174) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/Code2Video/)

- [ComfyMind: Toward General-Purpose Generation via Tree-Based Planning and Reactive Feedback](https://arxiv.org/abs/2505.17908) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/LitaoGuo/ComfyMind.svg?style=social&label=Star)](https://github.com/LitaoGuo/ComfyMind) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.17908)

- [EditDuet: A Multi-Agent System for Video Non-Linear Editing](https://doi.org/10.1145/3721238.3730761) — **2025 · SIGGRAPH 2025: Conference Papers**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3721238.3730761) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://mudtriangle.com/editduet)

- [FullDiT2: Efficient In-Context Conditioning for Video Diffusion Transformers](https://arxiv.org/abs/2506.04213) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.04213) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://fulldit2.github.io/)

- [Manimator: Transforming Research Papers into Visual Explanations](https://arxiv.org/abs/2507.14306) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.14306)

- [MG-Gen: Single Image to Motion Graphics Generation](https://arxiv.org/abs/2504.02361) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CyberAgentAILab/MG-GEN.svg?style=social&label=Star)](https://github.com/CyberAgentAILab/MG-GEN) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.02361)

- [Video-As-Prompt: Unified Semantic Control for Video Generation](https://arxiv.org/abs/2510.20888) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/bytedance/Video-As-Prompt.svg?style=social&label=Star)](https://github.com/bytedance/Video-As-Prompt) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.20888) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://bytedance.github.io/Video-As-Prompt)

- [WorldWander: Bridging Egocentric and Exocentric Worlds in Video Generation](https://arxiv.org/abs/2511.22098) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/showlab/WorldWander.svg?style=social&label=Star)](https://github.com/showlab/WorldWander) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.22098)

- [AICL: Action In-Context Learning for Video Diffusion Model](https://arxiv.org/abs/2403.11535) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.11535)

- [AssistEditor: Multi-Agent Collaboration for GUI Workflow Automation in Video Creation](https://doi.org/10.1145/3664647.3684998) — **2024 · Proceedings of the 32nd ACM International Conference on Multimedia**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3664647.3684998)

- [From Data to Story: Towards Automatic Animated Data Video Creation with LLM-based Multi-Agent Systems](https://arxiv.org/abs/2408.03876) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.03876)

- [GPT4Motion: Scripting Physical Motions in Text-to-Video Generation via Blender-Oriented GPT Planning](https://arxiv.org/abs/2311.12631) — **2024 · 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)**<br>
  [![Star](https://img.shields.io/github/stars/jiaxilv/GPT4Motion.svg?style=social&label=Star)](https://github.com/jiaxilv/GPT4Motion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.12631) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gpt4motion.github.io/)

- [Keyframer: Empowering Animation Design using Large Language Models](https://arxiv.org/abs/2402.06071) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/apple/ml-keyframer.svg?style=social&label=Star)](https://github.com/apple/ml-keyframer) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.06071)

- [Kubrick: Multimodal Agent Collaborations for Synthetic Video Generation](https://arxiv.org/abs/2408.10453) — **2024 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.10453)

- [LAVE: LLM-Powered Agent Assistance and Language Augmentation for Video Editing](https://doi.org/10.1145/3640543.3645143) — **2024 · IUI 2024**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.1145/3640543.3645143) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.dgp.toronto.edu/~bryanw/lave/)

- [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://arxiv.org/abs/2404.07972) — **2024 · NeurIPS**<br>
  [![Star](https://img.shields.io/github/stars/xlang-ai/OSWorld.svg?style=social&label=Star)](https://github.com/xlang-ai/OSWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.07972) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://os-world.github.io/)

- [ScreenAgent: A Vision Language Model-driven Computer Control Agent](https://arxiv.org/abs/2402.07945) — **2024 · Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence (IJCAI-24)**<br>
  [![Star](https://img.shields.io/github/stars/niuzaisheng/ScreenAgent.svg?style=social&label=Star)](https://github.com/niuzaisheng/ScreenAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.07945)

- [Video Diffusion Transformers are In-Context Learners](https://arxiv.org/abs/2412.10783) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/feizc/Video-In-Context.svg?style=social&label=Star)](https://github.com/feizc/Video-In-Context) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.10783)

- [Video In-context Learning: Autoregressive Transformers are Zero-Shot Video Imitators](https://arxiv.org/abs/2407.07356) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.07356)

- [VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://arxiv.org/abs/2406.10227) — **2024 · Advances in Neural Information Processing Systems 37**<br>
  [![Star](https://img.shields.io/github/stars/showlab/videogui.svg?style=social&label=Star)](https://github.com/showlab/videogui) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.10227) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/videogui/)

- [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128) — **2023 · 2023 IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/cvlab-columbia/viper.svg?style=social&label=Star)](https://github.com/cvlab-columbia/viper) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.08128) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://viper.cs.columbia.edu/)

- [Visual Programming: Compositional Visual Reasoning without Training](https://arxiv.org/abs/2211.11559) — **2023 · 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/allenai/visprog.svg?style=social&label=Star)](https://github.com/allenai/visprog) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2211.11559)

- [ComfyUI Nodes: Types, Inputs, and Outputs](https://docs.comfy.org/basic-concepts/nodes) — **n.d. · Official documentation**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://docs.comfy.org/basic-concepts/nodes)

## Foundations & Related Surveys

Generative models, agents, the agent harness, and complementary research perspectives. **81 resources.**

### Contributions and Positioning

- [Agentic Artifact Creation: Systems, Evaluation, Principles, and Opportunities](https://arxiv.org/abs/2608.28122) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/GeminiLight/awesome-agentic-artifact-creation.svg?style=social&label=Star)](https://github.com/GeminiLight/awesome-agentic-artifact-creation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.28122)

- [Agentic Generative Systems: A Survey on Autonomous Multimodal Content Creation](https://doi.org/10.20944/preprints202607.1997.v1) — **2026 · Preprints.org**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://doi.org/10.20944/preprints202607.1997.v1)

- [Agentic Video Understanding: A Survey](https://arxiv.org/abs/2609.31713) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/DXY0711/Awesome-Agentic-Video-Understanding.svg?style=social&label=Star)](https://github.com/DXY0711/Awesome-Agentic-Video-Understanding) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.31713)

- [Agentic Visual Generation: From Generative Models to Agentic Control](https://arxiv.org/abs/2609.06758) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YinmingHuang/Awesome-agentic-visual-generation-model.svg?style=social&label=Star)](https://github.com/YinmingHuang/Awesome-agentic-visual-generation-model) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.06758)

- [Agentic World Modeling: Foundations, Capabilities, Laws, and Beyond](https://arxiv.org/abs/2604.22748) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/matrix-agent/awesome-agentic-world-modeling.svg?style=social&label=Star)](https://github.com/matrix-agent/awesome-agentic-world-modeling) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.22748)

- [Code as Agent Harness](https://arxiv.org/abs/2605.18747) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YennNing/Awesome-Code-as-Agent-Harness-Papers.svg?style=social&label=Star)](https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18747)

- [From Question Answering to Task Completion: A Survey on Agent System and Harness Design](https://arxiv.org/abs/2606.20683) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/ggjy/Awesome-Agent-Engineering.svg?style=social&label=Star)](https://github.com/ggjy/Awesome-Agent-Engineering) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.20683)

- [Quo Vadis, World Modeling?](https://arxiv.org/abs/2608.02713) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/worldbench/awesome-agentic-world-model.svg?style=social&label=Star)](https://github.com/worldbench/awesome-agentic-world-model) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.02713) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://worldbench.github.io/awesome-agentic-world-model)

- [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/deepgrounding/recursive-self-improvement.svg?style=social&label=Star)](https://github.com/deepgrounding/recursive-self-improvement) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.07663)

- [Robotic Video World Models: A Survey of Applications, Research Challenges, Future Directions](https://arxiv.org/abs/2601.07823) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/irom-princeton/awesome-robotics-video-world-model-papers.svg?style=social&label=Star)](https://github.com/irom-princeton/awesome-robotics-video-world-model-papers) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.07823)

- [Self-Improvements in Modern Agentic Systems: A Survey](https://arxiv.org/abs/2607.13104) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/selfimproving-agent/awesome-Self-Improving-Agents.svg?style=social&label=Star)](https://github.com/selfimproving-agent/awesome-Self-Improving-Agents) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.13104) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://selfimproving-agent.github.io/)

- [The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement](https://arxiv.org/abs/2609.11873) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/theseus-labs-rsi/awesome-rsi.svg?style=social&label=Star)](https://github.com/theseus-labs-rsi/awesome-rsi) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.11873)

- [The Past Frames the Future: Memory for Autoregressive Video Generation](https://arxiv.org/abs/2609.28466) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HaroldChen19/Awesome-AR-Video-Memory.svg?style=social&label=Star)](https://github.com/HaroldChen19/Awesome-AR-Video-Memory) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.28466)

- [Towards Interactive Video World Modeling: Frontiers, Challenges, Benchmarks, and Future Trends](https://arxiv.org/abs/2606.01164) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/liujiuming123/Awesome-Interactive-World-Model.svg?style=social&label=Star)](https://github.com/liujiuming123/Awesome-Interactive-World-Model) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.01164)

- [Video Generation Models: A Survey of Post-Training and Alignment](https://openreview.net/forum?id=YlUEWLESIu) — **2026 · Transactions on Machine Learning Research**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openreview.net/forum?id=YlUEWLESIu)

- [Video-RSI: Recursive Self-Improvement of Video Understanding Agents via Harness Evolution](https://arxiv.org/abs/2609.37950) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/bingjunluo/Video-RSI.svg?style=social&label=Star)](https://github.com/bingjunluo/Video-RSI) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.37950)

- [Visual Generation in the New Era: An Evolution from Atomic Mapping to Agentic World Modeling](https://arxiv.org/abs/2604.28185) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/EvolvingLMMs-Lab/Evolving-Visual-Generation.svg?style=social&label=Star)](https://github.com/EvolvingLMMs-Lab/Evolving-Visual-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.28185)

- [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/NTUMARS/Awesome-World-Model-for-Robotics-Policy.svg?style=social&label=Star)](https://github.com/NTUMARS/Awesome-World-Model-for-Robotics-Policy) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.00080)

- [World Models for Embodied Intelligence: From Plausible to Controllable to Actionable](https://arxiv.org/abs/2609.16697) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.16697) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://3dagentworld.github.io/EmbodiedWM/)

- [World Models for Robotic Manipulation: A Survey](https://arxiv.org/abs/2606.00113) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.00113)

- [World-Action Models for Robot Learning and Control: A Survey](https://arxiv.org/abs/2609.16074) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/RCL-Robotics/Awesome-World-Action-Models.svg?style=social&label=Star)](https://github.com/RCL-Robotics/Awesome-World-Action-Models) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.16074) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://rcl-robotics.github.io/Awesome-World-Action-Models)

- [A Comprehensive Survey on World Models for Embodied AI](https://arxiv.org/abs/2510.16732) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Li-Zn-H/AwesomeWorldModels.svg?style=social&label=Star)](https://github.com/Li-Zn-H/AwesomeWorldModels) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.16732)

- [A Step Toward World Models: A Survey on Robotic Manipulation](https://arxiv.org/abs/2511.02097) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.02097)

- [A Survey of Interactive Generative Video](https://arxiv.org/abs/2504.21853) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.21853)

- [A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence](https://arxiv.org/abs/2507.21046) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CharlesQ9/Self-Evolving-Agents.svg?style=social&label=Star)](https://github.com/CharlesQ9/Self-Evolving-Agents) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.21046)

- [A Survey: Spatiotemporal Consistency in Video Generation](https://arxiv.org/abs/2502.17863) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Yin-Z-Y/A-Survey-Spatiotemporal-Consistency-in-Video-Generation.svg?style=social&label=Star)](https://github.com/Yin-Z-Y/A-Survey-Spatiotemporal-Consistency-in-Video-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.17863)

- [Controllable Video Generation: A Survey](https://arxiv.org/abs/2507.16869) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/mayuelala/Awesome-Controllable-Video-Generation.svg?style=social&label=Star)](https://github.com/mayuelala/Awesome-Controllable-Video-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.16869)

- [Exploring the Evolution of Physics Cognition in Video Generation: A Survey](https://arxiv.org/abs/2503.21765) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation.svg?style=social&label=Star)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.21765)

- [Preference Alignment on Diffusion Model: A Comprehensive Survey for Image Generation and Editing](https://arxiv.org/abs/2502.07829) — **2025 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.07829)

- [Simulating the Visual World with Artificial Intelligence: A Roadmap](https://arxiv.org/abs/2511.08585) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/ziqihuangg/Awesome-From-Video-Generation-to-World-Model.svg?style=social&label=Star)](https://github.com/ziqihuangg/Awesome-From-Video-Generation-to-World-Model) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.08585) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://world-model-roadmap.github.io/)

- [A Comprehensive Survey on Human Video Generation: Challenges, Methods, and Insights](https://arxiv.org/abs/2407.08428) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/wentaoL86/Awesome-Human-Body-Video-Generation.svg?style=social&label=Star)](https://github.com/wentaoL86/Awesome-Human-Body-Video-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.08428)

- [A Survey of AI-Generated Video Evaluation](https://arxiv.org/abs/2410.19884) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.19884)

- [A Survey on Long Video Generation: Challenges, Methods, and Prospects](https://arxiv.org/abs/2403.16407) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.16407)

- [A Survey on Self-Evolution of Large Language Models](https://arxiv.org/abs/2404.14387) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AlibabaResearch/DAMO-ConvAI.svg?style=social&label=Star)](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/Awesome-Self-Evolution-of-LLM) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.14387)

- [Alignment of Diffusion Models: Fundamentals, Challenges, and Future](https://arxiv.org/abs/2409.07253) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xie-lab-ml/awesome-alignment-of-diffusion-models.svg?style=social&label=Star)](https://github.com/xie-lab-ml/awesome-alignment-of-diffusion-models) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2409.07253)

- [Autoregressive Models in Vision: A Survey](https://arxiv.org/abs/2411.05902) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/ChaofanTao/Autoregressive-Models-in-Vision-Survey.svg?style=social&label=Star)](https://github.com/ChaofanTao/Autoregressive-Models-in-Vision-Survey) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.05902)

- [Controllable Generation with Text-to-Image Diffusion Models: A Survey](https://arxiv.org/abs/2403.04279) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/PRIV-Creation/Awesome-Controllable-T2I-Diffusion-Models.svg?style=social&label=Star)](https://github.com/PRIV-Creation/Awesome-Controllable-T2I-Diffusion-Models) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.04279)

- [Diffusion Model-Based Image Editing: A Survey](https://arxiv.org/abs/2402.17525) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/SiatMMLab/Awesome-Diffusion-Model-Based-Image-Editing-Methods.svg?style=social&label=Star)](https://github.com/SiatMMLab/Awesome-Diffusion-Model-Based-Image-Editing-Methods) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.17525)

- [Diffusion Model-Based Video Editing: A Survey](https://arxiv.org/abs/2407.07111) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/wenhao728/awesome-diffusion-v2v.svg?style=social&label=Star)](https://github.com/wenhao728/awesome-diffusion-v2v) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.07111)

- [From Sora What We Can See: A Survey of Text-to-Video Generation](https://arxiv.org/abs/2405.10674) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/soraw-ai/Awesome-Text-to-Video-Generation.svg?style=social&label=Star)](https://github.com/soraw-ai/Awesome-Text-to-Video-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.10674)

- [LLMs Meet Multimodal Generation and Editing: A Survey](https://arxiv.org/abs/2405.19334) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YingqingHe/Awesome-LLMs-meet-Multimodal-Generation.svg?style=social&label=Star)](https://github.com/YingqingHe/Awesome-LLMs-meet-Multimodal-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.19334)

- [Sora as a World Model? A Complete Survey on Text-to-Video Generation](https://arxiv.org/abs/2403.05131) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.05131)

- [Understanding World or Predicting Future? A Comprehensive Survey of World Models](https://arxiv.org/abs/2411.14499) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/tsinghua-fib-lab/World-Model.svg?style=social&label=Star)](https://github.com/tsinghua-fib-lab/World-Model) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.14499)

- [Video Diffusion Models: A Survey](https://arxiv.org/abs/2405.03150) — **2024 · Transactions on Machine Learning Research**<br>
  [![Star](https://img.shields.io/github/stars/ndrwmlnk/Awesome-Video-Diffusion-Models.svg?style=social&label=Star)](https://github.com/ndrwmlnk/Awesome-Video-Diffusion-Models) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.03150)

- [Video Is Worth a Thousand Images: Exploring the Latest Trends in Long Video Generation](https://arxiv.org/abs/2412.18688) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.18688)

- [RenAIssance: A Survey into AI Text-to-Image Generation in the Era of Large Model](https://arxiv.org/abs/2309.00810) — **2023 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.00810)

- [Text-to-image Diffusion Models in Generative AI: A Survey](https://arxiv.org/abs/2303.07909) — **2023 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.07909)

- [Diffusion Models: A Comprehensive Survey of Methods and Applications](https://arxiv.org/abs/2209.00796) — **2022 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YangLing0818/Diffusion-Models-Papers-Survey-Taxonomy.svg?style=social&label=Star)](https://github.com/YangLing0818/Diffusion-Models-Papers-Survey-Taxonomy) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2209.00796)

- [Adversarial Text-to-Image Synthesis: A Review](https://arxiv.org/abs/2101.09983) — **2021 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2101.09983)

- [AI-Empowered Persuasive Video Generation: A Survey](https://arxiv.org/abs/2112.09401) — **2021 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2112.09401)

### Motivation

- [Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](https://arxiv.org/abs/2510.04618) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/ace-agent/ace.svg?style=social&label=Star)](https://github.com/ace-agent/ace) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.04618)

- [autoresearch](https://github.com/karpathy/autoresearch) — **2026 · GitHub repository**<br>
  [![Star](https://img.shields.io/github/stars/karpathy/autoresearch.svg?style=social&label=Star)](https://github.com/karpathy/autoresearch) [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://github.com/karpathy/autoresearch)

- [Better Call CineCrew: Consistent Ultra-Long Narrative-to-Film Generation](https://arxiv.org/abs/2609.07720) — **2026 · ECCV**<br>
  [![Star](https://img.shields.io/github/stars/Ironieser/CineCrew.svg?style=social&label=Star)](https://github.com/Ironieser/CineCrew) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.07720) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://jiabenchen.github.io/cinecrew/)

- [Code as Agent Harness](https://arxiv.org/abs/2605.18747) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YennNing/Awesome-Code-as-Agent-Harness-Papers.svg?style=social&label=Star)](https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18747)

- [Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents](https://arxiv.org/abs/2505.22954) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/jennyzzt/dgm.svg?style=social&label=Star)](https://github.com/jennyzzt/dgm) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.22954)

- [Dual-IPO: Dual-Iterative Preference Optimization for Text-to-Video Generation](https://arxiv.org/abs/2502.02088) — **2026 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/SAIS-FUXI/IPO.svg?style=social&label=Star)](https://github.com/SAIS-FUXI/IPO) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.02088)

- [Harness Engineering for Self-Improvement](https://lilianweng.github.io/posts/2026-07-04-harness/) — **2026 · Lil'Log**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://lilianweng.github.io/posts/2026-07-04-harness/)

- [Infinite Worlds with Versatile Interactions](https://arxiv.org/abs/2607.07534) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/robbyant/lingbot-world-v2.svg?style=social&label=Star)](https://github.com/robbyant/lingbot-world-v2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.07534)

- [PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives](https://arxiv.org/abs/2608.13552) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/kxding/PlayWorld.svg?style=social&label=Star)](https://github.com/kxding/PlayWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.13552) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kxding.github.io/project/PlayWorld/)

- [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/deepgrounding/recursive-self-improvement.svg?style=social&label=Star)](https://github.com/deepgrounding/recursive-self-improvement) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.07663)

- [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/google-research/rrsi.svg?style=social&label=Star)](https://github.com/google-research/rrsi) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24972)

- [The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement](https://arxiv.org/abs/2609.11873) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/theseus-labs-rsi/awesome-rsi.svg?style=social&label=Star)](https://github.com/theseus-labs-rsi/awesome-rsi) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.11873)

- [VideoGen-Agent: Reinforcing Video Generation Agents](https://arxiv.org/abs/2609.24997) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.24997) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://andyca111.github.io/VideoGen_Agent/)

- [VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation](https://arxiv.org/abs/2606.08091) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/JianhuiWei7/VideoWeaver.svg?style=social&label=Star)](https://github.com/JianhuiWei7/VideoWeaver) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.08091)

- [ViMax: Agentic Video Generation](https://arxiv.org/abs/2606.07649) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/HKUDS/ViMax.svg?style=social&label=Star)](https://github.com/HKUDS/ViMax) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.07649)

- [VISTA: A Test-Time Self-Improving Video Generation Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://g-vista.github.io/)

- [Exploration-Driven Generative Interactive Environments](https://arxiv.org/abs/2504.02515) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/insait-institute/GenieRedux.svg?style=social&label=Star)](https://github.com/insait-institute/GenieRedux) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.02515)

- [Improving Video Generation with Human Feedback](https://arxiv.org/abs/2501.13918) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/KwaiVGI/VideoAlign.svg?style=social&label=Star)](https://github.com/KwaiVGI/VideoAlign) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.13918)

- [A Survey of AI-Generated Video Evaluation](https://arxiv.org/abs/2410.19884) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.19884)

- [HunyuanVideo: A Systematic Framework For Large Video Generative Models](https://arxiv.org/abs/2412.03603) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Tencent/HunyuanVideo.svg?style=social&label=Star)](https://github.com/Tencent/HunyuanVideo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.03603)

- [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://arxiv.org/abs/2408.06292) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/SakanaAI/AI-Scientist.svg?style=social&label=Star)](https://github.com/SakanaAI/AI-Scientist) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.06292)

- [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) — **2023 · Lil'Log**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://lilianweng.github.io/posts/2023-06-23-agent/)

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — **2023 · ICLR**<br>
  [![Star](https://img.shields.io/github/stars/ysymyth/ReAct.svg?style=social&label=Star)](https://github.com/ysymyth/ReAct) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.03629) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://react-lm.github.io)

### Agents and Harness Engineering

- [Code as Agent Harness](https://arxiv.org/abs/2605.18747) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/YennNing/Awesome-Code-as-Agent-Harness-Papers.svg?style=social&label=Star)](https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.18747)

- [Harness Engineering for Self-Improvement](https://lilianweng.github.io/posts/2026-07-04-harness/) — **2026 · Lil'Log**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://lilianweng.github.io/posts/2026-07-04-harness/)

- [Improving Video Generation with Human Feedback](https://arxiv.org/abs/2501.13918) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/KwaiVGI/VideoAlign.svg?style=social&label=Star)](https://github.com/KwaiVGI/VideoAlign) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.13918)

- [Introduction to Training LLMs for AI Agents](https://rdi.berkeley.edu/agentic-ai/slides/lecture1.pdf) — **2025 · LLM Agents MOOC, lecture slides**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://rdi.berkeley.edu/agentic-ai/slides/lecture1.pdf)

- [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) — **2023 · Lil'Log**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://lilianweng.github.io/posts/2023-06-23-agent/)

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — **2023 · ICLR**<br>
  [![Star](https://img.shields.io/github/stars/ysymyth/ReAct.svg?style=social&label=Star)](https://github.com/ysymyth/ReAct) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.03629) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://react-lm.github.io)

- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) — **2023 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/noahshinn/reflexion.svg?style=social&label=Star)](https://github.com/noahshinn/reflexion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.11366)

### Video Generation Foundations

- [PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives](https://arxiv.org/abs/2608.13552) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/kxding/PlayWorld.svg?style=social&label=Star)](https://github.com/kxding/PlayWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.13552) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kxding.github.io/project/PlayWorld/)

- [A Survey: Spatiotemporal Consistency in Video Generation](https://arxiv.org/abs/2502.17863) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Yin-Z-Y/A-Survey-Spatiotemporal-Consistency-in-Video-Generation.svg?style=social&label=Star)](https://github.com/Yin-Z-Y/A-Survey-Spatiotemporal-Consistency-in-Video-Generation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.17863)

- [Matrix-game 2.0: An open-source real-time and streaming interactive world model](https://arxiv.org/abs/2508.13009) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/SkyworkAI/Matrix-Game.svg?style=social&label=Star)](https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2508.13009) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://matrix-game-v2.github.io)

- [Self Forcing: Bridging the Train-Test Gap in Autoregressive Video Diffusion](https://arxiv.org/abs/2506.08009) — **2025 · Advances in Neural Information Processing Systems**<br>
  [![Star](https://img.shields.io/github/stars/guandeh17/Self-Forcing.svg?style=social&label=Star)](https://github.com/guandeh17/Self-Forcing) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.08009) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://self-forcing.github.io/)

- [A Survey of AI-Generated Video Evaluation](https://arxiv.org/abs/2410.19884) — **2024 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.19884)

- [Genie: Generative Interactive Environments](https://proceedings.mlr.press/v235/bruce24a.html) — **2024 · Proceedings of the 41st International Conference on Machine Learning**<br>
  [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://proceedings.mlr.press/v235/bruce24a.html)

- [HunyuanVideo: A Systematic Framework For Large Video Generative Models](https://arxiv.org/abs/2412.03603) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Tencent/HunyuanVideo.svg?style=social&label=Star)](https://github.com/Tencent/HunyuanVideo) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.03603)

- [Lumiere: A Space-Time Diffusion Model for Video Generation](https://arxiv.org/abs/2401.12945) — **2024 · SIGGRAPH Asia 2024 Conference Papers**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.12945) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://lumiere-video.github.io/)

- [VideoPoet: A Large Language Model for Zero-Shot Video Generation](https://arxiv.org/abs/2312.14125) — **2024 · Proceedings of the 41st International Conference on Machine Learning**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.14125)

- [Flow Matching for Generative Modeling](https://arxiv.org/abs/2210.02747) — **2023 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/facebookresearch/flow_matching.svg?style=social&label=Star)](https://github.com/facebookresearch/flow_matching) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.02747)

- [Phenaki: Variable Length Video Generation From Open Domain Textual Descriptions](https://arxiv.org/abs/2210.02399) — **2023 · International Conference on Learning Representations**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.02399)

- [Scalable Diffusion Models with Transformers](https://arxiv.org/abs/2212.09748) — **2023 · Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)**<br>
  [![Star](https://img.shields.io/github/stars/facebookresearch/DiT.svg?style=social&label=Star)](https://github.com/facebookresearch/DiT) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2212.09748)

- [High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752) — **2022 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/CompVis/latent-diffusion.svg?style=social&label=Star)](https://github.com/CompVis/latent-diffusion) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2112.10752)

- [Video Diffusion Models](https://arxiv.org/abs/2204.03458) — **2022 · Advances in Neural Information Processing Systems**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2204.03458) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://video-diffusion.github.io/)

## Future Directions

Autonomous production, lifelong memory, hybrid simulation, efficiency, provenance, safety, and emerging tasks. **13 resources.**

### Provenance and Safety

- [Content Credentials: C2PA Technical Specification](https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html) — **2026 · Online resource**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html)

### Fully End-to-end Video Production

- [DirectorBench: Diagnosing Long-Form Video Generation with Personalized Multi-Agent Evaluation](https://arxiv.org/abs/2605.30090) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/jiaminchen-1031/DirectorBench.svg?style=social&label=Star)](https://github.com/jiaminchen-1031/DirectorBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.30090)

### Emerging Tasks

- [DirectorBench: Diagnosing Long-Form Video Generation with Personalized Multi-Agent Evaluation](https://arxiv.org/abs/2605.30090) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/jiaminchen-1031/DirectorBench.svg?style=social&label=Star)](https://github.com/jiaminchen-1031/DirectorBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.30090)

- [EvoHarnessBench: Can Your Agents Keep Pace with an Evolving Harness?](https://arxiv.org/abs/2609.04280) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.04280)

- [PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives](https://arxiv.org/abs/2608.13552) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/kxding/PlayWorld.svg?style=social&label=Star)](https://github.com/kxding/PlayWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.13552) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kxding.github.io/project/PlayWorld/)

- [Rethinking the Evaluation of Harness Evolution for Agents](https://arxiv.org/abs/2607.12227) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.12227)

- [Diffusion Models Are Real-Time Game Engines](https://arxiv.org/abs/2408.14837) — **2025 · International Conference on Learning Representations**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.14837) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gamengen.github.io/)

- [GameGen-X: Interactive Open-world Game Video Generation](https://arxiv.org/abs/2411.00769) — **2025 · International Conference on Learning Representations**<br>
  [![Star](https://img.shields.io/github/stars/GameGen-X/GameGen-X.svg?style=social&label=Star)](https://github.com/GameGen-X/GameGen-X) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.00769) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://gamegen-x.github.io/)

- [WorldScore: A Unified Evaluation Benchmark for World Generation](https://openaccess.thecvf.com/content/ICCV2025/papers/Duan_WorldScore_A_Unified_Evaluation_Benchmark_for_World_Generation_ICCV_2025_paper.pdf) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/haoyi-duan/WorldScore.svg?style=social&label=Star)](https://github.com/haoyi-duan/WorldScore) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/papers/Duan_WorldScore_A_Unified_Evaluation_Benchmark_for_World_Generation_ICCV_2025_paper.pdf) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://haoyi-duan.github.io/WorldScore/)

### Hybrid Code-Pixel Generation

- [Genie 4: A new generation of world simulation](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/) — **2026 · Google DeepMind blog**<br>
  [![Source](https://img.shields.io/badge/Source-6c757d.svg)](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/)

- [PhysAgent: Reflective Agentic Physics Control for Physically Plausible Video Generation](https://arxiv.org/abs/2607.16355) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/IApple233/PhysAgent.svg?style=social&label=Star)](https://github.com/IApple233/PhysAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.16355) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://iapple233.github.io/PhysAgent)

- [World Narrative Model for Highly Controllable Video Generation: A Paradigm Shift from Pixel Sampling to Physical World Orchestration](https://arxiv.org/abs/2606.31946) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.31946)

### Lifelong Memory

- [StoryMem: Multi-shot Long Video Storytelling with Memory](https://arxiv.org/abs/2512.19539) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Kevin-thu/StoryMem.svg?style=social&label=Star)](https://github.com/Kevin-thu/StoryMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.19539) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kevin-thu.github.io/StoryMem)

- [WorldMem: Long-term Consistent World Simulation with Memory](https://arxiv.org/abs/2504.12369) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xizaoqu/WorldMem.svg?style=social&label=Star)](https://github.com/xizaoqu/WorldMem) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.12369) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://xizaoqu.github.io/worldmem/)

## Benchmarks & Evaluation

Evaluation resources from across the reading paths.

- [A Benchmark and Multi-Agent System for Instruction-driven Cinematic Video Compilation](https://arxiv.org/abs/2604.10456) — **2026 · Preprint**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.10456)

- [AVGen-Bench: A Task-Driven Benchmark for Multi-Granular Evaluation of Text-to-Audio-Video Generation](https://arxiv.org/abs/2604.08540) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/microsoft/AVGen-Bench.svg?style=social&label=Star)](https://github.com/microsoft/AVGen-Bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.08540) [![Website](https://img.shields.io/badge/Website-9cf.svg)](http://aka.ms/avgenbench)

- [Beyond Coherence: Benchmarking Professional Editing-Technique Execution in Multi-Shot Audio-Video Generation](https://arxiv.org/abs/2609.08275) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AlibabaResearch/cut-craft-bench.svg?style=social&label=Star)](https://github.com/AlibabaResearch/cut-craft-bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.08275)

- [CutVerse: A Compositional GUI Agents Benchmark for Media Post-Production Editing](https://arxiv.org/abs/2605.19484) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/CUC-MIPG/CutVerse.svg?style=social&label=Star)](https://github.com/CUC-MIPG/CutVerse) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.19484)

- [Do Video Generators Track the World Across Segments? A Benchmark and Method for World-State Reasoning in Video Continuation](https://arxiv.org/abs/2609.03673) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AMAP-ML/StateAgent.svg?style=social&label=Star)](https://github.com/AMAP-ML/StateAgent) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.03673)

- [EvalVerse: Pipeline-Aware and Expert-Calibrated Benchmarking for Professional Cinematic Video Generation](https://arxiv.org/abs/2605.23271) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.23271)

- [PhyGround: Benchmarking Physical Reasoning in Generative World Models](https://arxiv.org/abs/2605.10806) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/NU-World-Model-Embodied-AI/PhyGround.svg?style=social&label=Star)](https://github.com/NU-World-Model-Embodied-AI/PhyGround) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.10806) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://phyground.github.io/)

- [PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives](https://arxiv.org/abs/2608.13552) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/kxding/PlayWorld.svg?style=social&label=Star)](https://github.com/kxding/PlayWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.13552) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://kxding.github.io/project/PlayWorld/)

- [RAVEN-Eval: Rubric-Guided Automatic Evaluation for AI Video Generation Models Based on LMM Preference Judgement](https://arxiv.org/abs/2608.09111) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2608.09111)

- [SLVMEval: Synthetic Meta Evaluation Benchmark for Text-to-Long Video Generation](https://arxiv.org/abs/2603.29186) — **2026 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/tohoku-nlp/SLVMEval.svg?style=social&label=Star)](https://github.com/tohoku-nlp/SLVMEval) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.29186) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://slvmeval.github.io/)

- [Towards Interactive Video World Modeling: Frontiers, Challenges, Benchmarks, and Future Trends](https://arxiv.org/abs/2606.01164) — **2026 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/liujiuming123/Awesome-Interactive-World-Model.svg?style=social&label=Star)](https://github.com/liujiuming123/Awesome-Interactive-World-Model) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.01164)

- [V2V-Bench: A Comprehensive Benchmark for Video-to-Video Generation Evaluation](https://arxiv.org/abs/2606.05665) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2606.05665)

- [WorldArena: A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models](https://arxiv.org/abs/2602.08971) — **2026 · arXiv**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.08971) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://world-arena.ai)

- [Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval](https://arxiv.org/abs/2506.03141) — **2025 · Proceedings of the SIGGRAPH Asia 2025 Conference Papers**<br>
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.03141) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://context-as-memory.github.io/)

- [SVBench: Evaluation of Video Generation Models on Social Reasoning](https://arxiv.org/abs/2512.21507) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Gloria2tt/SVBench-Evaluation.svg?style=social&label=Star)](https://github.com/Gloria2tt/SVBench-Evaluation) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.21507)

- [T2V-CompBench: A Comprehensive Benchmark for Compositional Text-to-video Generation](https://arxiv.org/abs/2407.14505) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/KaiyueSun98/T2V-CompBench.svg?style=social&label=Star)](https://github.com/KaiyueSun98/T2V-CompBench/tree/V2) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.14505) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://t2v-compbench-2025.github.io/)

- [VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness](https://arxiv.org/abs/2503.21755) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/VBench.svg?style=social&label=Star)](https://github.com/Vchitect/VBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.21755) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vchitect.github.io/VBench-2.0-project/)

- [Video-Bench: Human-Aligned Video Generation Benchmark](https://arxiv.org/abs/2504.04907) — **2025 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/Video-Bench/Video-Bench.svg?style=social&label=Star)](https://github.com/Video-Bench/Video-Bench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.04907)

- [VideoGen-Eval: Agent-based System for Video Generation Evaluation](https://arxiv.org/abs/2503.23452) — **2025 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/AILab-CVC/VideoGen-Eval.svg?style=social&label=Star)](https://github.com/AILab-CVC/VideoGen-Eval) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.23452)

- [WorldScore: A Unified Evaluation Benchmark for World Generation](https://openaccess.thecvf.com/content/ICCV2025/papers/Duan_WorldScore_A_Unified_Evaluation_Benchmark_for_World_Generation_ICCV_2025_paper.pdf) — **2025 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/haoyi-duan/WorldScore.svg?style=social&label=Star)](https://github.com/haoyi-duan/WorldScore) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/ICCV2025/papers/Duan_WorldScore_A_Unified_Evaluation_Benchmark_for_World_Generation_ICCV_2025_paper.pdf) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://haoyi-duan.github.io/WorldScore/)

- [ComfyBench: Benchmarking LLM-based Agents in ComfyUI for Autonomously Designing Collaborative AI Systems](https://arxiv.org/abs/2409.01392) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/xxyQwQ/ComfyBench.svg?style=social&label=Star)](https://github.com/xxyQwQ/ComfyBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2409.01392)

- [DreamRunner: Fine-Grained Compositional Story-to-Video Generation with Retrieval-Augmented Motion Adaptation](https://arxiv.org/abs/2411.16657) — **2024 · arXiv**<br>
  [![Star](https://img.shields.io/github/stars/wz0919/DreamRunner.svg?style=social&label=Star)](https://github.com/wz0919/DreamRunner) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.16657) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://zunwang1.github.io/DreamRunner)

- [EvalCrafter: Benchmarking and Evaluating Large Video Generation Models](https://openaccess.thecvf.com/content/CVPR2024/html/Liu_EvalCrafter_Benchmarking_and_Evaluating_Large_Video_Generation_Models_CVPR_2024_paper.html) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition**<br>
  [![Star](https://img.shields.io/github/stars/EvalCrafter/EvalCrafter.svg?style=social&label=Star)](https://github.com/EvalCrafter/EvalCrafter) [![Paper](https://img.shields.io/badge/Paper-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2024/html/Liu_EvalCrafter_Benchmarking_and_Evaluating_Large_Video_Generation_Models_CVPR_2024_paper.html) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://evalcrafter.github.io/)

- [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://arxiv.org/abs/2404.07972) — **2024 · NeurIPS**<br>
  [![Star](https://img.shields.io/github/stars/xlang-ai/OSWorld.svg?style=social&label=Star)](https://github.com/xlang-ai/OSWorld) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.07972) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://os-world.github.io/)

- [VBench: Comprehensive Benchmark Suite for Video Generative Models](https://arxiv.org/abs/2311.17982) — **2024 · Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**<br>
  [![Star](https://img.shields.io/github/stars/Vchitect/VBench.svg?style=social&label=Star)](https://github.com/Vchitect/VBench) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.17982) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://vchitect.github.io/VBench-project/)

- [VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://arxiv.org/abs/2406.10227) — **2024 · Advances in Neural Information Processing Systems 37**<br>
  [![Star](https://img.shields.io/github/stars/showlab/videogui.svg?style=social&label=Star)](https://github.com/showlab/videogui) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.10227) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://showlab.github.io/videogui/)

- [Frozen in Time: A Joint Video and Image Encoder for End-to-End Retrieval](https://arxiv.org/abs/2104.00650) — **2021 · Proceedings of the IEEE/CVF International Conference on Computer Vision**<br>
  [![Star](https://img.shields.io/github/stars/m-bain/frozen-in-time.svg?style=social&label=Star)](https://github.com/m-bain/frozen-in-time) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2104.00650)

## Contributing

Suggest a paper, project, dataset, benchmark, or metadata correction through an [issue](https://github.com/agentic-videogen/awesome-agentic-videogen/issues/new?template=add-resource.yml) or pull request. Include a primary paper/resource URL and a reading path. Code and project links should be official.

Bibliographic records were assembled from the survey bibliography. Source-checked timeline metadata is reused where available; other records retain their bibliography metadata. Inclusion does not imply endorsement, and missing code links do not imply that code is unavailable. Corrections are welcome.

## Acknowledgements

Inspired by [Awesome-Video-Diffusion](https://github.com/showlab/Awesome-Video-Diffusion) and [Awesome Agentic World Modeling](https://github.com/matrix-agent/awesome-agentic-world-modeling).

## Citation

If you find our survey useful, please cite:

```bibtex
@misc{fan2026videogenerationmeetsagent,
  title={Video Generation Meets Agent Harness: Agentic Video Generation, Agentic World Modeling and Recursive Self-Improvement},
  author={Liaoyuan Fan and Yuhao Zheng and Dongxing Mao and Hangyu Ran and Siyuan Hu and Weijia Mao and Rui Zhao and Weijia Wu and Guian Fang and Yanzhe Chen and Zeyu Zhu and Yuxin Jiang and Yiren Song and Yuchao Gu and Junchao Yi and Qi Hu and Dan Kong and Alex Jinpeng Wang and Kevin Qinghong Lin and Mike Zheng Shou and Wei Liu},
  year={2026},
  eprint={2610.40191},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2610.40191},
}
```
