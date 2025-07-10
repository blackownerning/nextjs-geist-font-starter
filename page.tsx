"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="text-2xl font-bold text-cyan-400">EVOTECH.AI</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-cyan-400 transition-colors">Início</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Sobre</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Serviços</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Portfólio</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Depoimentos</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contatos</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">Automatize</span><br />
            <span className="text-white">seu negócio</span><br />
            <span className="text-white">com</span><br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Inteligência<br />Artificial
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transforme seu negócio com soluções de IA de última geração para 
            automação inteligente, otimização de processos e crescimento sustentável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3">
              Começar Agora
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3">
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">R$ 700.000+</div>
                <div className="text-gray-400">Faturamento mensal</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400">Bots</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">Suporte</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Robot Image Placeholder */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
            <div className="text-6xl">🤖</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">Sobre a Evotech AI</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Somos pioneiros em soluções de IA que transformam negócios através de 
            automação inteligente e otimização de processos para máxima eficiência.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-cyan-400">🧠</div>
                <h3 className="text-lg font-semibold mb-2">Automação IA</h3>
                <p className="text-gray-400 text-sm">
                  Automatize processos complexos com inteligência artificial avançada
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-cyan-400">💬</div>
                <h3 className="text-lg font-semibold mb-2">Chatbots Virtual</h3>
                <p className="text-gray-400 text-sm">
                  Atendimento 24/7 com chatbots inteligentes e personalizados
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-cyan-400">📊</div>
                <h3 className="text-lg font-semibold mb-2">Análise IA</h3>
                <p className="text-gray-400 text-sm">
                  Insights poderosos através de análise de dados com IA
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-purple-400">⚡</div>
                <h3 className="text-lg font-semibold mb-2">Integração Rápida</h3>
                <p className="text-gray-400 text-sm">
                  Implementação rápida e integração perfeita com seus sistemas
                </p>
              </CardContent>
            </Card>
          </div>

          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 mt-12">
            Conhecer Soluções
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-400">Clique para assistir o vídeo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="px-6 py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Nossas Soluções</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-3xl mb-4 text-cyan-400">🤖</div>
                <h3 className="text-lg font-semibold mb-3">Chatbots IA</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Atendimento automatizado inteligente para seus clientes 24/7
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Respostas inteligentes</li>
                  <li>• Integração WhatsApp</li>
                  <li>• Análise de sentimentos</li>
                  <li>• Relatórios detalhados</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-3xl mb-4 text-cyan-400">📊</div>
                <h3 className="text-lg font-semibold mb-3">Automação Virtual</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Automatize processos repetitivos e aumente a produtividade
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• RPA inteligente</li>
                  <li>• Workflows automatizados</li>
                  <li>• Integração de sistemas</li>
                  <li>• Monitoramento em tempo real</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-3xl mb-4 text-cyan-400">🎯</div>
                <h3 className="text-lg font-semibold mb-3">Pós-Vendas</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Mantenha seus clientes engajados com follow-up automatizado
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Follow-up automático</li>
                  <li>• Pesquisas de satisfação</li>
                  <li>• Upsell inteligente</li>
                  <li>• Retenção de clientes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-3xl mb-4 text-purple-400">⚡</div>
                <h3 className="text-lg font-semibold mb-3">Soluções Personalizadas</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Desenvolvemos soluções sob medida para seu negócio específico
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Análise de necessidades</li>
                  <li>• Desenvolvimento customizado</li>
                  <li>• Suporte especializado</li>
                  <li>• Escalabilidade garantida</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Casos de Sucesso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-green-500/20 rounded-lg p-4 mb-4">
                  <div className="text-green-400 text-sm font-mono">
                    <div>💬 Loja de Roupas</div>
                    <div className="mt-2">📈 +300% vendas</div>
                    <div>⏰ 24/7 atendimento</div>
                    <div>🎯 95% satisfação</div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">E-commerce Fashion</h3>
                <p className="text-gray-400 text-sm">
                  Implementação de chatbot para atendimento e vendas resultou em 
                  aumento de 300% nas conversões e atendimento 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-blue-500/20 rounded-lg p-4 mb-4">
                  <div className="text-blue-400 text-sm font-mono">
                    <div>🏥 Clínica Médica</div>
                    <div className="mt-2">📅 Agendamentos automáticos</div>
                    <div>⏱️ -80% tempo de espera</div>
                    <div>📊 Gestão inteligente</div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Clínica de Saúde</h3>
                <p className="text-gray-400 text-sm">
                  Automação completa de agendamentos e lembretes reduziu 
                  tempo de espera em 80% e melhorou experiência do paciente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-purple-500/20 rounded-lg p-4 mb-4">
                  <div className="text-purple-400 text-sm font-mono">
                    <div>🏢 Empresa de Serviços</div>
                    <div className="mt-2">🤖 RPA implementado</div>
                    <div>💰 -60% custos operacionais</div>
                    <div>⚡ +200% produtividade</div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Automação Corporativa</h3>
                <p className="text-gray-400 text-sm">
                  Implementação de RPA e automação de processos resultou em 
                  redução de 60% nos custos e aumento de 200% na produtividade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">O Que Dizem Nossos Clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Maria Clara</div>
                    <div className="text-sm text-gray-400">CEO, Fashion Store</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "A implementação do chatbot da Evotech AI revolucionou nosso atendimento. 
                  Agora conseguimos atender clientes 24/7 e nossas vendas triplicaram!"
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Roberto Silva</div>
                    <div className="text-sm text-gray-400">Diretor, Clínica Saúde+</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "A automação de agendamentos foi um divisor de águas. Reduzimos 
                  drasticamente o tempo de espera e melhoramos a satisfação dos pacientes."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Ana Santos</div>
                    <div className="text-sm text-gray-400">Gerente, TechCorp</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "As soluções de RPA da Evotech AI automatizaram nossos processos 
                  repetitivos, liberando nossa equipe para focar em atividades estratégicas."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Entre em Contato</h2>
          <p className="text-center text-gray-400 mb-12">
            Pronto para transformar seu negócio? Entre em contato conosco e descubra 
            como a IA pode revolucionar sua empresa.
          </p>
          
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome completo</label>
                  <Input 
                    placeholder="Seu nome completo"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <Input 
                    placeholder="(11) 99999-9999"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={4}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-4">EVOTECH.AI</div>
              <p className="text-gray-400 text-sm">
                Transformando negócios através da inteligência artificial e automação inteligente.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Chatbots IA</li>
                <li>Automação RPA</li>
                <li>Análise de Dados</li>
                <li>Consultoria IA</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sobre Nós</li>
                <li>Portfólio</li>
                <li>Blog</li>
                <li>Carreiras</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  📘
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  📷
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  🐦
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Evotech AI. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
