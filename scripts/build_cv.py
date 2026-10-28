"""Build the public CV from professional information; no phone or date of birth."""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'assets/files/Zehua_Ma_CV.pdf'
INK, BLUE, MUTED = map(HexColor, ['#202b37', '#355f7a', '#697581'])
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCustom',fontName='Times-Roman',fontSize=30,leading=34,textColor=INK,spaceAfter=7))
styles.add(ParagraphStyle(name='SubCustom',fontName='Helvetica',fontSize=9,leading=14,textColor=MUTED,spaceAfter=4))
styles.add(ParagraphStyle(name='SectionCustom',fontName='Helvetica-Bold',fontSize=11,leading=16,textColor=BLUE,spaceBefore=18,spaceAfter=9))
styles.add(ParagraphStyle(name='BodyCustom',fontName='Helvetica',fontSize=9,leading=14,textColor=INK,spaceAfter=7))
styles.add(ParagraphStyle(name='TitleCustom',fontName='Helvetica-Bold',fontSize=9.5,leading=14,textColor=INK,spaceAfter=4))
styles.add(ParagraphStyle(name='SmallCustom',fontName='Helvetica',fontSize=8,leading=12,textColor=MUTED,spaceAfter=6))
styles.add(ParagraphStyle(name='BulletCustom',fontName='Helvetica',fontSize=8.8,leading=13.5,textColor=INK,leftIndent=10,firstLineIndent=-8,spaceAfter=5))
def p(text,style='BodyCustom'): return Paragraph(text,styles[style])
def section(t): story.append(p(t.upper(),'SectionCustom'))
def block(title,date,subtitle,bullets):
 items=[p(title,'TitleCustom'),p(date+' | '+subtitle,'SmallCustom')]
 items.extend(p('- '+x,'BulletCustom') for x in bullets)
 items.append(Spacer(1,9))
 story.append(KeepTogether(items))
def footer(canvas,doc):
 canvas.setStrokeColor(HexColor('#e3e8eb'));canvas.line(45,38,A4[0]-45,38)
 canvas.setFont('Helvetica',7.5);canvas.setFillColor(MUTED)
 canvas.drawString(45,25,'Zehua Ma | mazh58@mail2.sysu.edu.cn | Updated October 2026')
 canvas.drawRightString(A4[0]-45,25,str(doc.page))
story=[p('Zehua Ma','NameCustom'),p('Generative AI | 3D Vision | Video Reasoning','SubCustom'),p('<link href="mailto:mazh58@mail2.sysu.edu.cn" color="#355f7a">mazh58@mail2.sysu.edu.cn</link>  |  <link href="https://smazehua.github.io/" color="#355f7a">smazehua.github.io</link>  |  <link href="https://github.com/smazehua" color="#355f7a">github.com/smazehua</link>','SubCustom')]
section('Research interests')
story.append(p('Personalized generation, 3D generation and reconstruction, and video generation for visual reasoning. My work focuses on identity-preserving synthesis, faithful 3D geometry and textures, and task-relevant latent state trajectories for logically consistent video generation.'))
section('Education')
block('Sun Yat-sen University','Sep. 2024 - Present; expected graduation 2027','M.S. Student', ['School of Intelligent Systems Engineering. Advisor: Prof. Xiaodan Liang.'])
block('Sun Yat-sen University','Sep. 2020 - Jun. 2024','Undergraduate Studies', ['School of Intelligent Systems Engineering. Advisor: Prof. Xiaodan Liang.'])
section('Selected research projects')
block('VR-JEPA: Learning Contrastive-State Latent Guidance for Generation-based Video Reasoning','2026','Co-first author | arXiv:2609.40129',[
'Decouple state evolution reasoning from visual synthesis; predict task-relevant latent state trajectories in the V-JEPA 2.1 representation space to guide Wan2.2 video generation.',
'Design localized contrastive-state learning to identify informative states and regions from successful and generated trajectories.',
'Develop skill-routed mixture-of-experts with seven skill-specific experts and sparse routing for spatial, numerical, and physical reasoning.'
])
block('ERGO: Excess-Risk-Guided Optimization for High-Fidelity Monocular 3D Gaussian Splatting','2026','Co-first author | arXiv:2602.10278',[
'Use excess-risk decomposition for adaptive multi-view optimization in single-image 3D generation.',
'Combine geometry-aware and texture-aware objectives to improve local reconstruction quality.',
'Evaluate geometric fidelity and texture quality on Google Scanned Objects and OmniObject3D.'
])
block('DreamVTON: Customizing 3D Virtual Try-on with Personalized Diffusion Models','2024','Co-author | ACM Multimedia 2024',[
'Customize 3D human virtual try-on using personalized diffusion priors and multi-concept LoRA.',
'Combine normal-style LoRA and template-based optimization to improve geometry and texture learning.'
])
story.append(PageBreak())
story.append(p('Zehua Ma','NameCustom'))
story.append(p('Research experience & publications','SubCustom'))
section('Industry research experience')
block('Huawei | 2012 Laboratories','Nov. 2025 - Oct. 2026','Research Intern',[
'Research visual reasoning through video generation; related work: VR-JEPA.',
'Work on video generation and reasoning training pipelines, mixture-of-experts models, and contrastive learning.'
])
block('Tencent | TEG, Hunyuan 3D Generation, Shenzhen','Jun. 2024 - Dec. 2024','Research Intern',[
'Study single-image 3D reconstruction and the impact of synthetic multi-view data on LRM generalization and detail recovery.',
'Build synthetic multi-view data workflows, fine-tune LRMs, and train local quality assessment models.'
])
block('Tencent | TEG, Hunyuan Image Generation, Shenzhen','Nov. 2023 - Jun. 2024','Research Intern',[
'Work on identity-preserving portrait generation for personalized ID photos.',
'Train face-identity and template LoRAs and combine them to preserve identity and control appearance.'
])
block('ZMO.AI | Shenzhen','Jul. 2023 - Nov. 2023','Computer Vision Algorithm Intern',[
'Generate product advertising images while preserving the product across different scenes.',
'Combine product segmentation, layout composition, background generation, and local inpainting to improve boundaries, lighting, and contact shadows.'
])
section('Additional co-authored publications & preprints')
story.append(p('<b>Beyond the Eye: Efficient Multimodal Reasoning via Self-Regulated Implicit Visual Tools.</b><br/>Xiuwei Chen, Quanlin Chen, Wentao Hu, Zisheng Chen, Kun Xiang, <b>Zehua Ma</b>, et al.<br/><font color="#697581">IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI). Accepted October 2026.<br/>Preprint: arXiv:2607.11106.</font>'))
story.append(p('<b>AnyCrowd: Instance-Isolated Identity-Pose Binding for Arbitrary Multi-Character Animation.</b><br/>Zhenyu Xie, Ji Xia, Michael Kampffmeyer, Panwen Hu, <b>Zehua Ma</b>, et al.<br/><font color="#697581">arXiv:2603.15415, 2026.</font>'))
section('Methods & tools')
story.append(p('Diffusion models, personalized generation, LoRA, DreamBooth, ControlNet, inpainting, 3D Gaussian Splatting, large reconstruction models (LRMs), JEPA, mixture-of-experts, and contrastive learning.'))
OUTPUT.parent.mkdir(parents=True,exist_ok=True)
SimpleDocTemplate(str(OUTPUT),pagesize=A4,rightMargin=45,leftMargin=45,topMargin=40,bottomMargin=55,title='Zehua Ma - Curriculum Vitae',author='Zehua Ma').build(story,onFirstPage=footer,onLaterPages=footer)
print(OUTPUT)
