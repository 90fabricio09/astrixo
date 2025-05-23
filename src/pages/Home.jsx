import React, { useState, useEffect } from 'react';
import Astrixo from '../assets/astrixo.png';
import ShowcaseImg from '../assets/showcase.png';
import Portfolio1 from '../assets/hbfretamento.png';
import Portfolio2 from '../assets/echotap.png';
import Portfolio3 from '../assets/cachehost.png';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Removendo a URL temporária do Unsplash
// const AvatarImg = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80";

export default function Home() {
  // Estado para controlar o menu no mobile
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`astrixo-hero ${scrollPosition > 50 ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <div className="logo"><a href="/"><img src={Astrixo} alt="Astrixo - Agência de Design e Desenvolvimento Web" loading="lazy" /></a></div>
          
          {/* Container que agrupa links e botão de Área do Cliente */}
          <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#services" onClick={() => setIsOpen(false)}>Serviços</a></li>
              <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfólio</a></li>
            </ul>
            <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer" className="client-area-button">Contato</a>
          </div>

          {/* Ícone do menu hambúrguer (aparece apenas no mobile) */}
          <div 
            className={`hamburger ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="astrixo-title">
            Transformamos ideias em<br /> experiências digitais únicas
          </h1>
          <p className="astrixo-slogan">Onde seu projeto alcança as estrelas <i className="bi bi-star-fill"></i></p>
          <p className="astrixo-subtitle">
            Somos uma agência especializada em design e desenvolvimento web, criando soluções digitais que impulsionam o sucesso do seu negócio.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer" className="astrixo-button">Fale Conosco</a>
            <a href="#services" className="hero-learn-more">Saiba mais <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="gradient-overlay"></div>
        </div>
      </header>

      <section id="services" className="features">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p className="section-subtitle">Soluções digitais completas para impulsionar seu negócio</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <i className="bi bi-code-square feature-icon"></i>
            <h3>Desenvolvimento Web</h3>
            <p>Criamos sites e aplicações web modernas, responsivas e otimizadas para performance. Desde landing pages até sistemas complexos.</p>
            <ul className="service-features">
              <li>Sites Institucionais</li>
              <li>Landing Pages</li>
              <li>E-commerces</li>
              <li>Sistemas Web</li>
              <li>Aplicativos Web</li>
            </ul>
          </div>
          <div className="feature-card">
            <i className="bi bi-palette feature-icon"></i>
            <h3>Design Gráfico</h3>
            <p>Desenvolvemos identidades visuais, materiais gráficos e designs que comunicam a essência da sua marca de forma única.</p>
            <ul className="service-features">
              <li>Identidade Visual</li>
              <li>Material Gráfico</li>
              <li>Social Media</li>
              <li>Apresentações</li>
              <li>Branding</li>
            </ul>
          </div>
          <div className="feature-card">
            <i className="bi bi-graph-up-arrow feature-icon"></i>
            <h3>Tráfego Orgânico</h3>
            <p>Otimizamos sua presença digital com estratégias de SEO, conteúdo relevante e técnicas para aumentar sua visibilidade natural.</p>
            <ul className="service-features">
              <li>Otimização SEO</li>
              <li>Content Marketing</li>
              <li>Estratégia de Conteúdo</li>
              <li>Link Building</li>
              <li>Análise de Dados</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="showcase-content">
          <h2>Design que inspira</h2>
          <p>Criamos experiências digitais que encantam e convertem, combinando estética e funcionalidade.</p>
          <a href="#portfolio" className="learn-more">Ver portfólio <i className="bi bi-arrow-right"></i></a>
        </div>
        <div className="showcase-image" style={{ backgroundImage: `url(${ShowcaseImg})` }} role="img" aria-label="Showcase de design"></div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="section-header">
          <h2>Nosso Portfólio</h2>
          <p className="section-subtitle">Projetos que transformaram a presença digital de nossos clientes</p>
        </div>
        <div className="portfolio-grid">
          <a href="https://hbfretamento.com.br" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url(${Portfolio1})` }} role="img" aria-label="Projeto HB Fretamento"></div>
            <h3>HB Fretamento</h3>
            <p>Desenvolvimento web, design gráfico e tráfego orgânico</p>
          </a>
          <a href="https://echotap.com.br" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url(${Portfolio2})` }} role="img" aria-label="Projeto EchoTap"></div>
            <h3>EchoTap</h3>
            <p>Desenvolvimento web, design gráfico e tráfego orgânico</p>
          </a>
          <a href="https://cachehost.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url(${Portfolio3})` }} role="img" aria-label="Projeto CacheHost"></div>
            <h3>CacheHost</h3>
            <p>Desenvolvimento web, design gráfico e tráfego orgânico</p>
          </a>
        </div>
      </section>

      <section className="numbers">
        <div className="section-header">
          <h2>Nossos Números</h2>
          <p className="section-subtitle">Resultados que comprovam nossa expertise</p>
        </div>
        <div className="numbers-grid">
          <NumberCard 
            icon="bi-code-slash"
            end={20}
            suffix="+"
            label="Projetos Entregues"
            description="Sites, aplicações e designs desenvolvidos com excelência"
          />
          <NumberCard 
            icon="bi-graph-up-arrow"
            end={200}
            suffix="%"
            label="Aumento em Tráfego"
            description="Média de crescimento no tráfego orgânico dos clientes"
          />
          <NumberCard 
            icon="bi-phone"
            end={100}
            suffix="%"
            label="Mobile First"
            description="Sites totalmente otimizados para dispositivos móveis"
          />
          <NumberCard 
            icon="bi-emoji-smile"
            end={100}
            suffix="%"
            label="Satisfação"
            description="Clientes satisfeitos com nossos serviços e resultados"
          />
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="cta-content">
          <h2>Pronto para elevar sua presença digital?</h2>
          <p>Transforme sua visão em realidade com a astrixo</p>
          <div className="cta-buttons">
            <a href='https://wa.me/5511931501833' target="_blank" rel="noopener noreferrer" className="astrixo-button cta-button"><i className="bi bi-whatsapp"></i> Solicite um Orçamento</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Astrixo} alt="astrixo" loading="lazy" />
            <p>Onde seu projeto alcança as estrelas</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#services">Desenvolvimento Web</a></li>
                <li><a href="#services">Design Gráfico</a></li>
                <li><a href="#services">Tráfego Orgânico</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#services">Sobre nós</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer">Contato</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contato</h4>
              <ul>
                <li><a href="mailto:fabriciobetta88@gmail.com">fabriciobetta88@gmail.com</a></li>
                <li><a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer">(11) 93150-1833</a></li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Astrixo - Agência de Desenvolvimento Web, Design Gráfico e Tráfego Orgânico. Todos os direitos reservados.</p>
          <div className="social-links">
          <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/astrixo.web/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://discord.gg/8U3TBVfc6g" target="_blank" rel="noopener noreferrer"><i className="bi bi-discord"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

// Componente NumberCard
const NumberCard = ({ icon, end, suffix, label, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="number-card" ref={ref}>
      <div className="number-icon"><i className={`bi ${icon}`}></i></div>
      <div className="number-value">
        {inView ? <CountUp end={end} duration={2.5} /> : 0}{suffix}
      </div>
      <div className="number-label">{label}</div>
      <p>{description}</p>
    </div>
  );
};
