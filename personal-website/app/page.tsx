import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: '品牌体验设计',
    description: '从定位、视觉语言到数字触点，构建一致而清晰的品牌体验。',
    meta: '品牌策略 · 视觉系统 · 2026',
    tone: 'project-blue',
  },
  {
    number: '02',
    title: '数字产品设计',
    description: '把复杂流程整理成直观、自然、真正帮助用户完成目标的产品。',
    meta: '产品设计 · 交互设计 · 2026',
    tone: 'project-green',
  },
  {
    number: '03',
    title: '创意开发实验',
    description: '探索设计与代码相遇时，界面可以拥有的节奏、触感与新表达。',
    meta: '创意开发 · 原型 · 2026',
    tone: 'project-orange',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">
          YN<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a className="nav-contact" href="mailto:hello@example.com">
            联系我 <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> 目前可接受新项目</p>
          <h1>
            你好，我是<br />
            <em>你的名字。</em>
          </h1>
          <p className="hero-intro">
            一名专注于品牌与数字产品的独立设计师。我让复杂的想法，变成清晰、有温度的体验。
          </p>
          <a className="text-link" href="#work">
            查看作品 <ArrowDownRight size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-art" aria-label="抽象品牌主视觉">
          <div className="art-grid" />
          <div className="art-orbit" />
          <div className="art-label">DESIGN × CODE</div>
          <p>Ideas, shaped<br />with intention.</p>
          <span className="art-index">© 2026 / 001</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span /> 精选作品</p>
          <h2>从想法到体验，<br />每一步都算数。</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <span className="project-number">/{project.number}</span>
              <div>
                <p className="project-meta">{project.meta}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                <ArrowUpRight size={26} />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow light"><span /> 关于我</p>
        <div className="about-grid">
          <h2>相信好的设计，<br />始于理解。</h2>
          <div className="about-copy">
            <p>
              我关注人如何理解信息、使用产品，以及品牌如何被记住。工作中，我把策略、视觉和交互放在同一张桌子上思考。
            </p>
            <p>
              这里可以替换成你的经历、方法和个性，让访客快速知道你是谁，以及你在意什么。
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow"><span /> 开始合作</p>
          <h2>有个想法？<br /><em>一起聊聊。</em></h2>
        </div>
        <a className="email-link" href="mailto:hello@example.com">
          <Mail size={20} aria-hidden="true" /> hello@example.com
        </a>
        <p className="footer-meta">© 2026 你的名字 · 中国</p>
      </footer>
    </main>
  );
}
