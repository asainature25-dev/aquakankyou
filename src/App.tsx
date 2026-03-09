import React, { useState } from 'react';
import { 
  Droplets, 
  Wrench, 
  Trash2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  X,
  Clock,
  ShieldCheck,
  Building2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    id: 1,
    title: '受水槽・高架水槽清掃',
    description: '建物全体の水の安全と衛生を守るための専門作業です。設備の状態や用途を踏まえ、管理業務として必要な清掃・点検を行います。',
    points: ['定期・スポット対応', '建物規模に応じた施工', '作業記録・状況報告対応'],
    icon: <Droplets className="w-8 h-8 text-primary" />,
    image: 'https://picsum.photos/seed/water-tank/800/600'
  },
  {
    id: 2,
    title: '上下水道特殊清掃',
    description: '配管・下水設備など、普段見えない箇所の清掃・点検を行います。詰まりや不具合を未然に防ぐため、専門的な判断を伴う作業に対応しています。',
    points: ['マンホール・床下・配管内部', '安全を考慮した清掃作業', '管理会社・施設対応可'],
    icon: <Trash2 className="w-8 h-8 text-primary" />,
    image: 'https://picsum.photos/seed/drainage/800/600'
  },
  {
    id: 3,
    title: '水回り修理・交換',
    description: 'キッチン・洗面・給水設備など、日常生活や施設運営に関わる水回り設備の修理・交換を行います。状態を確認し、設備に適した方法で確実に対応します。',
    points: ['蛇口・パッキン交換', '給排水管の修理', '設備機器の更新'],
    icon: <Wrench className="w-8 h-8 text-primary" />,
    image: 'https://picsum.photos/seed/plumbing/800/600'
  },
  {
    id: 4,
    title: 'トイレ詰まり・清掃',
    description: 'トイレの詰まりは、生活や業務に直結する緊急性の高いトラブルです。状況に応じて、その日のうち、または翌日の対応など、可能な限り迅速に対応します。',
    points: ['原因調査・清掃・復旧作業', '再発防止を考慮した対応', '管理会社・施設からのご依頼にも対応'],
    icon: <Droplets className="w-8 h-8 text-primary" />,
    image: 'https://picsum.photos/seed/toilet/800/600'
  },
  {
    id: 5,
    title: 'その他特殊清掃',
    description: '工事現場や設備関連など、内容によっては対応業者が限られる清掃作業にも対応しています。現場状況を確認したうえで、対応可能な範囲を明確にお伝えします。',
    points: ['特殊現場の清掃', '産業用設備の洗浄', '柔軟な対応力'],
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    image: 'https://picsum.photos/seed/special-cleaning/800/600'
  }
];

const steps = [
  { id: 1, title: 'ご相談', description: '電話・メール・LINEにてお問い合わせください。' },
  { id: 2, title: '内容確認', description: '状況をお伺いし、必要な対応を整理します。' },
  { id: 3, title: 'お見積もり', description: '作業内容・費用をご説明します。' },
  { id: 4, title: '施工', description: '現場状況に応じた安全で確実な作業を行います。' },
  { id: 5, title: 'お支払い', description: '作業完了後、ご確認のうえお支払いとなります。' }
];

const reasons = [
  '40年の現場経験',
  '有資格者による専門対応',
  '管理会社・施設対応の実績',
  '定期管理から緊急対応まで幅広く対応'
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: '受水槽・高架水槽清掃',
    name: '',
    company: '',
    phone: '',
    email: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。内容を確認次第ご連絡いたします。');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary tracking-tighter">アクア環境管理</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">サービス内容</a>
              <a href="#flow" className="text-sm font-medium hover:text-primary transition-colors">ご依頼の流れ</a>
              <a href="#reasons" className="text-sm font-medium hover:text-primary transition-colors">選ばれる理由</a>
              <a href="#contact" className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all">お問い合わせ</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4"
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">サービス内容</a>
              <a href="#flow" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">ご依頼の流れ</a>
              <a href="#reasons" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">選ばれる理由</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-primary">お問い合わせ</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
              alt="Water Infrastructure" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                家庭のお困りごとから、<br />
                <span className="text-primary">街の水インフラまで。</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                40年の現場経験と有資格者による専門対応。<br />
                管理会社・施設運営の業務パートナーとして、<br />
                水回りのトラブルと管理業務を支えています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all group">
                  お問い合わせはこちら
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:0574541412" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all">
                  <Phone className="mr-2 w-5 h-5" />
                  0574-54-1412
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">サービス内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-500">
                          <CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section id="reasons" className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <Droplets className="w-full h-full" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">アクア環境管理が<br />選ばれる理由</h2>
                <div className="space-y-6">
                  {reasons.map((reason, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-medium">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
                    alt="Professional Work" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-primary font-bold text-4xl mb-1">40+</div>
                  <div className="text-slate-600 font-medium">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section id="flow" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">ご依頼の流れ</h2>
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-xl font-bold text-primary">{step.id}</span>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl w-full flex-grow border border-slate-100">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step {step.id}</div>
                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ・ご相談</h2>
                <p className="text-slate-400 text-lg mb-12">
                  水回りのトラブルから、建物・施設の管理業務まで対応しています。<br />
                  状況により、当日または翌日の対応が可能です。
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">お電話でのお問い合わせ</div>
                      <a href="tel:0574541412" className="text-3xl font-bold hover:text-primary transition-colors">0574-54-1412</a>
                      <p className="text-sm text-slate-500 mt-2">※緊急の場合は、お電話でのご連絡をおすすめします。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">インボイス対応</div>
                      <p className="text-lg font-medium">適格請求書発行事業者（インボイス制度）に対応しています。</p>
                      <p className="text-sm text-slate-500 mt-1">管理会社・法人とのお取引にも安心してご利用いただけます。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">お問い合わせ内容（必須）</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option>受水槽・高架水槽清掃</option>
                      <option>上下水道特殊清掃</option>
                      <option>水回り修理・交換</option>
                      <option>トイレ詰まり・清掃</option>
                      <option>その他特殊清掃</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">お名前</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="山田 太郎"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">会社名（法人の場合）</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="株式会社〇〇"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">電話番号</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="090-0000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">メールアドレス</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2">お問い合わせ内容（自由記入）</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="具体的な状況などをご記入ください"
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold text-primary mb-4 tracking-tighter">アクア環境管理</div>
              <div className="text-slate-600 space-y-1">
                <p>〒501-3305</p>
                <p>岐阜県加茂郡富加町滝田36-1</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end">
              <div className="flex space-x-6 mb-6">
                <a href="#services" className="text-sm text-slate-500 hover:text-primary">サービス内容</a>
                <a href="#flow" className="text-sm text-slate-500 hover:text-primary">ご依頼の流れ</a>
                <a href="#reasons" className="text-sm text-slate-500 hover:text-primary">選ばれる理由</a>
              </div>
              <p className="text-xs text-slate-400">© {new Date().getFullYear()} アクア環境管理 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
