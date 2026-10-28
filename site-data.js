/* Edit this file to update profile text, papers, news, and experience. */
window.SITE_DATA = {
  translations: {
    en: {
      'nav.about':'About','nav.research':'Research','nav.papers':'Publications','nav.experience':'Experience',
      'hero.eyebrow':'GENERATIVE AI · 3D VISION · VIDEO REASONING','hero.role':'M.S. Student at Sun Yat-sen University','hero.school':'School of Electronics and Information Technology','hero.cv':'Curriculum Vitae ↗','hero.location':'Shenzhen, China','hero.graduation':'Expected graduation',
      'research.kicker':'EXPLORING','research.title':'Research interests','news.kicker':'UPDATES','news.title':'Recent news','news.updated':'Updated October 2026',
      'papers.kicker':'SELECTED WORK','papers.title':'Publications & preprints','papers.all':'All','papers.first':'First author','papers.description':'* Equal contribution. My name is highlighted.',
      'experience.kicker':'ALONG THE WAY','experience.title':'Experience & education','experience.industry':'Industry research','experience.education':'Education','experience.toolkit':'Methods & tools',
      'contact.kicker':'GET IN TOUCH','contact.title':'Let’s talk about what’s next.','contact.description':'I welcome research discussions and opportunities in generative AI, 3D vision, and video reasoning.',
      'footer.school':'Sun Yat-sen University','footer.top':'Back to top ↑',
      bio:[
        'I am a master’s student at <a href="https://www.sysu.edu.cn/" target="_blank" rel="noopener">Sun Yat-sen University</a>, advised by <a href="https://lemondan.github.io/" target="_blank" rel="noopener">Prof. Xiaodan Liang</a>. My research explores <strong>personalized generation, 3D generation, and video generation</strong>. I am interested in building generative models that preserve identity, recover faithful geometry, and reason about how the world evolves.',
        'Recently, I have been working on <strong>latent-state-guided video reasoning</strong> and <strong>single-image 3D reconstruction</strong>. I have gained industry research experience at Huawei’s 2012 Laboratories, Tencent’s Hunyuan teams, and ZMO.AI.'
      ],
      research:[
        ['Video generation & reasoning','Predicting task-relevant latent state trajectories to guide video generation toward logically consistent outcomes.','JEPA · Contrastive learning · MoE'],
        ['3D generation & reconstruction','Reconstructing high-quality geometry and textures from a single image through adaptive multi-view optimization.','3D Gaussian Splatting · LRM'],
        ['Personalized generation','Customizing diffusion models for identity-preserving portraits, virtual try-on, and controllable visual content.','Diffusion models · LoRA · ControlNet']
      ],
      news:[
        ['Sep. 2026','Our preprint <a href="https://arxiv.org/abs/2609.40129" target="_blank" rel="noopener"><strong>VR-JEPA</strong></a> is available on arXiv, exploring latent guidance for generation-based video reasoning.'],
        ['Jul. 2026','<a href="https://arxiv.org/abs/2607.11106" target="_blank" rel="noopener"><strong>Beyond the Eye</strong></a>, our work on efficient multimodal reasoning, is available on arXiv.'],
        ['Feb. 2026','<a href="https://arxiv.org/abs/2602.10278" target="_blank" rel="noopener"><strong>ERGO</strong></a> is available on arXiv. <a href="https://github.com/smazehua/ERGO" target="_blank" rel="noopener">Code ↗</a>'],
        ['2024','<a href="https://arxiv.org/abs/2407.16511" target="_blank" rel="noopener"><strong>DreamVTON</strong></a> was published at <strong>ACM Multimedia 2024</strong>.']
      ],
      industry:[
        ['Nov. 2025 – Oct. 2026','Huawei · 2012 Laboratories','Research Intern','Video generation for visual reasoning; latent state prediction, mixture-of-experts training, and contrastive learning.'],
        ['Jun. 2024 – Dec. 2024','Tencent · Hunyuan 3D','Research Intern · TEG, Shenzhen','Single-image 3D reconstruction, synthetic multi-view data, LRM fine-tuning, and local quality assessment.'],
        ['Nov. 2023 – Jun. 2024','Tencent · Hunyuan Image Generation','Research Intern · TEG, Shenzhen','Identity-preserving portrait generation using personalized diffusion models and multi-LoRA composition.'],
        ['Jul. 2023 – Nov. 2023','ZMO.AI','Computer Vision Algorithm Intern · Shenzhen','Product advertising image generation with subject preservation, background synthesis, inpainting, and ControlNet.']
      ],
      education:[
        ['Sep. 2024 – Present · Expected 2027','Sun Yat-sen University','M.S. Student','School of Electronics and Information Technology<br>Advisor: <a href="https://lemondan.github.io/" target="_blank" rel="noopener">Prof. Xiaodan Liang</a>'],
        ['Sep. 2020 – Jun. 2024','Sun Yat-sen University','Undergraduate Studies','School of Intelligent Systems Engineering<br>Advisor: <a href="https://lemondan.github.io/" target="_blank" rel="noopener">Prof. Xiaodan Liang</a>']
      ]
    },
    zh: {
      'nav.about':'关于我','nav.research':'研究方向','nav.papers':'论文成果','nav.experience':'个人经历',
      'hero.eyebrow':'生成式人工智能 · 三维视觉 · 视频推理','hero.role':'中山大学 · 硕士研究生','hero.school':'电子与信息工程学院 · 导师：梁小丹教授','hero.cv':'个人简历 ↗','hero.location':'中国 · 深圳','hero.graduation':'预计毕业',
      'research.kicker':'研究探索','research.title':'研究方向','news.kicker':'近期动态','news.title':'最新消息','news.updated':'更新于 2026 年 10 月',
      'papers.kicker':'研究成果','papers.title':'论文与预印本','papers.all':'全部','papers.first':'第一作者','papers.description':'* 表示共同第一作者，姓名加粗标注。',
      'experience.kicker':'成长足迹','experience.title':'实习与教育经历','experience.industry':'研究实习','experience.education':'教育背景','experience.toolkit':'研究方法与技术',
      'contact.kicker':'联系交流','contact.title':'期待下一次交流。','contact.description':'欢迎交流生成式人工智能、三维视觉与视频推理研究，也期待相关研究与工作机会。',
      'footer.school':'中山大学','footer.top':'回到顶部 ↑',
      bio:[
        '我是<a href="https://www.sysu.edu.cn/" target="_blank" rel="noopener">中山大学</a>电子与信息工程学院硕士研究生，导师为<a href="https://lemondan.github.io/" target="_blank" rel="noopener">梁小丹教授</a>。研究兴趣聚焦于<strong>个性化生成、三维生成与视频生成</strong>，希望构建能够保持人物身份、恢复高质量三维结构，并理解动态世界演化的生成模型。',
        '近期主要研究<strong>潜在状态轨迹引导的视频生成与视觉推理</strong>，以及<strong>单图像三维生成与重建</strong>。曾在华为 2012 实验室、腾讯混元团队和 ZMO.AI 开展研究实习。'
      ],
      research:[
        ['视频生成与视觉推理','预测与任务相关的潜在状态轨迹，引导视频生成，提升生成结果的逻辑一致性与任务完成能力。','JEPA · 对比学习 · 混合专家'],
        ['三维生成与重建','基于单张图像与自适应多视角优化，提升三维重建的几何保真度、纹理质量与细节表现。','3D Gaussian Splatting · LRM'],
        ['个性化可控生成','定制扩散模型，实现身份保持的肖像生成、人物与服装定制化虚拟试穿，以及可控视觉内容生成。','扩散模型 · LoRA · ControlNet']
      ],
      news:[
        ['2026.09','预印本 <a href="https://arxiv.org/abs/2609.40129" target="_blank" rel="noopener"><strong>VR-JEPA</strong></a> 已上线 arXiv，研究潜在轨迹引导的视频生成与视觉推理。'],
        ['2026.07','多模态高效推理工作 <a href="https://arxiv.org/abs/2607.11106" target="_blank" rel="noopener"><strong>Beyond the Eye</strong></a> 已上线 arXiv。'],
        ['2026.02','单图三维生成工作 <a href="https://arxiv.org/abs/2602.10278" target="_blank" rel="noopener"><strong>ERGO</strong></a> 已上线 arXiv，<a href="https://github.com/smazehua/ERGO" target="_blank" rel="noopener">代码已公开 ↗</a>。'],
        ['2024','<a href="https://arxiv.org/abs/2407.16511" target="_blank" rel="noopener"><strong>DreamVTON</strong></a> 发表于 <strong>ACM Multimedia 2024</strong>。']
      ],
      industry:[
        ['2025.11 – 2026.10','华为 · 2012 实验室','研究实习生','视频生成驱动的视觉推理研究，涉及潜在状态预测、混合专家模型训练与对比学习。'],
        ['2024.06 – 2024.12','腾讯 · 混元三维生成中心','研究实习生 · 深圳 TEG','单图像三维重建与质量优化，合成多视图数据流程、LRM 微调与局部质量评价模型。'],
        ['2023.11 – 2024.06','腾讯 · 混元图像生成中心','研究实习生 · 深圳 TEG','面向证件照场景的身份保持肖像生成，结合个性化扩散模型与多 LoRA 融合。'],
        ['2023.07 – 2023.11','ZMO.AI','计算机视觉算法实习生 · 深圳','面向商品广告图的主体保留、背景生成与局部重绘，探索 ControlNet 条件控制生成。']
      ],
      education:[
        ['2024.09 – 至今 · 预计 2027 年毕业','中山大学','硕士研究生','电子与信息工程学院<br>导师：<a href="https://lemondan.github.io/" target="_blank" rel="noopener">梁小丹教授</a>'],
        ['2020.09 – 2024.06','中山大学','本科','智能工程学院<br>导师：<a href="https://lemondan.github.io/" target="_blank" rel="noopener">梁小丹教授</a>']
      ]
    }
  },
  papers:[
    {id:'vrjepa',year:2026,first:true,venue:'arXiv · 2026',arxiv:'2609.40129',title:'VR-JEPA: Learning Contrastive-State Latent Guidance for Generation-based Video Reasoning',authors:'Zehua Ma*, Kun Xiang*, Yunshuang Nie, Quanlin Chen, Haoyuan Li, Xiuwei Chen, Jiang Ji, Haijun Wu, Zhenyu Xie, Michael Kampffmeyer, Hanhui Li, Xiaodan Liang',summary:{en:'Aligning predicted latent state trajectories with task-specific reasoning to guide more logically consistent video generation.',zh:'利用局部对比状态学习与技能路由混合专家，预测任务相关潜在轨迹，引导逻辑一致的视频生成。'}},
    {id:'bee',year:2026,first:false,venue:'arXiv · 2026',arxiv:'2607.11106',title:'Beyond the Eye: Efficient Multimodal Reasoning via Self-Regulated Implicit Visual Tools',authors:'Xiuwei Chen, Quanlin Chen, Wentao Hu, Zisheng Chen, Kun Xiang, Zehua Ma, Mingyang Zhang, Jianhua Han, Hanhui Li, Hang Xu, Xiaodan Liang',summary:{en:'Self-regulated implicit visual tools for efficient fine-grained perception and multimodal reasoning.',zh:'通过自调节隐式视觉工具，提升细粒度视觉感知和多模态推理的效率。'}},
    {id:'anycrowd',year:2026,first:false,venue:'arXiv · 2026',arxiv:'2603.15415',project:'https://xiezhy6.github.io/anycrowd/',title:'AnyCrowd: Instance-Isolated Identity-Pose Binding for Arbitrary Multi-Character Animation',authors:'Zhenyu Xie, Ji Xia, Michael Kampffmeyer, Panwen Hu, Zehua Ma, Yujian Zheng, Jing Wang, Zheng Chong, Xujie Zhang, Xianhang Cheng, Xiaodan Liang, Hao Li',summary:{en:'Instance-isolated representations and decoupled attention for controllable animation of multiple characters.',zh:'结合实例隔离潜在表征与解耦注意力，实现多角色动画中的身份保持与姿态绑定。'}},
    {id:'ergo',year:2026,first:true,venue:'arXiv · 2026',arxiv:'2602.10278',code:'https://github.com/smazehua/ERGO',title:'ERGO: Excess-Risk-Guided Optimization for High-Fidelity Monocular 3D Gaussian Splatting',authors:'Zehua Ma*, Hanhui Li*, Zhenyu Xie, Xiaonan Luo, Michael Kampffmeyer, Feng Gao, Xiaodan Liang',summary:{en:'Excess-risk decomposition enables adaptive multi-view optimization for faithful single-image 3D reconstruction.',zh:'通过超额风险分解与几何、纹理感知目标，实现自适应多视角优化，提升单图三维生成质量。'}},
    {id:'dreamvton',year:2024,first:false,venue:'ACM MM · 2024',published:true,arxiv:'2407.16511',doi:'10.1145/3664647.3681391',title:'DreamVTON: Customizing 3D Virtual Try-on with Personalized Diffusion Models',authors:'Zhenyu Xie, Haoye Dong, Yufei Gao, Zehua Ma, Xiaodan Liang',summary:{en:'Personalized diffusion priors and template-based optimization bring customized people and clothing into 3D.',zh:'结合多概念 LoRA、法线风格 LoRA 与模板优化，实现人物与服装定制化三维虚拟试穿。'}}
  ]
};
