import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqCategories = [
    {
      title: 'Sécurité & Conformité',
      icon: 'Shield',
      faqs: [
        {
          question: 'FaceKey est-il conforme au RGPD ?',
          answer: `Absolument. FaceKey est entièrement conforme au RGPD européen. Toutes les données biométriques sont chiffrées avec AES-256, stockées sur des serveurs européens certifiés ISO 27001, et ne sont jamais partagées avec des tiers.\n\nNous fournissons tous les documents nécessaires pour votre registre de traitement et notre DPO est disponible pour répondre à vos questions de conformité.`,
          videoAvailable: true
        },
        {
          question: 'Comment sont protégées les données biométriques ?',
          answer: `Les données biométriques sont converties en templates mathématiques irréversibles, chiffrées et stockées dans des bases de données sécurisées. Même en cas de compromission, il est impossible de reconstituer l'image originale.\n\nNous utilisons un chiffrement de bout en bout et des protocoles de sécurité bancaires pour toutes les transmissions.`,
          videoAvailable: false
        },
        {
          question: 'Qui a accès aux données de reconnaissance faciale ?',
          answer: `Seuls les administrateurs RH autorisés de votre entreprise ont accès aux données. Nos équipes techniques n'accèdent jamais aux données biométriques. Chaque accès est tracé et auditable.\n\nVous gardez le contrôle total sur vos données avec possibilité d'export ou de suppression à tout moment.`,
          videoAvailable: false
        }
      ]
    },
    {
      title: 'Fonctionnalités & Intégration',icon: 'Settings',
      faqs: [
        {
          question: 'FaceKey s\'intègre-t-il avec notre SIRH existant ?',
          answer: `Oui, FaceKey s'intègre nativement avec plus de 50 solutions RH populaires : SAP SuccessFactors, Workday, BambooHR, Lucca, PayFit, et bien d'autres.\n\nNous proposons également une API REST complète pour les intégrations personnalisées. Notre équipe technique vous accompagne gratuitement dans la mise en place.`,
          videoAvailable: true
        },
        {
          question: 'Que se passe-t-il si la reconnaissance faciale échoue ?',
          answer: `Notre système a un taux de réussite de 99.9%, mais en cas d'échec, plusieurs alternatives sont disponibles :\n\n• Pointage manuel supervisé\n• Code PIN de secours\n• Validation par un manager\n• Badge de secours temporaire\n\nTous les échecs sont tracés pour analyse et amélioration continue.`,
          videoAvailable: false
        },
        {
          question: 'FaceKey fonctionne-t-il avec des masques ou lunettes ?',answer: `Oui, notre IA de dernière génération reconnaît les visages même avec masques, lunettes, barbe ou changements d'apparence. Le système s'adapte automatiquement aux évolutions physiques.\n\nPour les masques, nous analysons la partie supérieure du visage avec une précision maintenue à 99.5%.`,
          videoAvailable: true
        }
      ]
    },
    {
      title: 'Tarification & Support',icon: 'Euro',
      faqs: [
        {
          question: 'Y a-t-il des frais d\'installation ou de configuration ?',
          answer: `Non, l'installation et la configuration initiale sont incluses dans tous nos plans. Notre équipe vous accompagne gratuitement pour :\n\n• Configuration du système\n• Formation de vos équipes\n• Intégration avec vos outils\n• Tests et validation\n\nSeuls les développements sur mesure peuvent générer des coûts additionnels.`,
          videoAvailable: false
        },
        {
          question: 'Quel support est inclus dans les plans ?',
          answer: `Le support varie selon votre plan :\n\n• Starter : Support email en français, réponse sous 24h\n• Professional : Support prioritaire, réponse sous 4h, chat en direct\n• Enterprise : Support dédié 24/7, manager de compte, SLA garantie\n\nTous les plans incluent la documentation complète et les formations en ligne.`,
          videoAvailable: false
        },
        {
          question: 'Puis-je annuler mon abonnement à tout moment ?',answer: `Oui, vous pouvez annuler votre abonnement à tout moment sans frais. L'annulation prend effet à la fin de votre période de facturation en cours.\n\nNous vous aidons également à exporter toutes vos données avant la fermeture du compte.`,
          videoAvailable: false
        }
      ]
    },
    {
      title: 'Implémentation & Formation',
      icon: 'Rocket',
      faqs: [
        {
          question: 'Combien de temps prend l\'implémentation ?',
          answer: `L'implémentation standard prend 1-2 semaines :\n\n• Jour 1-3 : Configuration et intégrations\n• Jour 4-7 : Tests et formation équipes\n• Jour 8-14 : Déploiement progressif et ajustements\n\nPour les grandes entreprises (1000+ employés), comptez 3-4 semaines avec un déploiement par phases.`,
          videoAvailable: true
        },
        {
          question: 'Quelle formation est nécessaire pour les utilisateurs ?',
          answer: `FaceKey est conçu pour être intuitif. La formation inclut :\n\n• 30 min pour les employés (utilisation basique)\n• 2h pour les managers (rapports et validation)\n• 4h pour les administrateurs RH (configuration complète)\n\nToutes les formations sont disponibles en présentiel, visio ou e-learning.`,
          videoAvailable: false
        },
        {
          question: 'Avez-vous des références clients dans notre secteur ?',answer: `Nous travaillons avec plus de 200 entreprises dans tous les secteurs. Nous pouvons vous mettre en relation avec des clients de votre industrie pour des retours d'expérience.\n\nNos principales références incluent des entreprises de 50 à 5000 employés dans l'industrie, les services, la santé, et l'éducation.`,
          videoAvailable: false
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const globalIndex = faqCategories?.slice(0, categoryIndex)?.reduce((acc, cat) => acc + cat?.faqs?.length, 0) + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? -1 : globalIndex);
  };

  const getGlobalIndex = (categoryIndex, faqIndex) => {
    return faqCategories?.slice(0, categoryIndex)?.reduce((acc, cat) => acc + cat?.faqs?.length, 0) + faqIndex;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="HelpCircle" size={16} className="mr-2" />
            Questions fréquentes
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Toutes vos questions sur{' '}
            <span className="text-primary">FaceKey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes sur notre solution 
            de reconnaissance faciale pour la gestion des présences.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-2xl shadow-card overflow-hidden">
              {/* Category Header */}
              <div className="p-6 border-b border-border bg-muted/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Icon name={category?.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category?.faqs?.length} questions dans cette catégorie
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="divide-y divide-border">
                {category?.faqs?.map((faq, faqIndex) => {
                  const globalIndex = getGlobalIndex(categoryIndex, faqIndex);
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full text-left flex items-center justify-between group"
                      >
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                              {faq?.question}
                            </h4>
                            {faq?.videoAvailable && (
                              <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                                <Icon name="Play" size={12} />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          <Icon name="ChevronDown" size={20} color="var(--color-muted-foreground)" />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="mt-6 animate-fade-in">
                          <div className="prose prose-sm max-w-none">
                            {faq?.answer?.split('\n\n')?.map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                                {paragraph?.split('\n')?.map((line, lIndex) => (
                                  <React.Fragment key={lIndex}>
                                    {line}
                                    {lIndex < paragraph?.split('\n')?.length - 1 && <br />}
                                  </React.Fragment>
                                ))}
                              </p>
                            ))}
                          </div>

                          {faq?.videoAvailable && (
                            <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                                  <Icon name="Play" size={16} />
                                </div>
                                <div>
                                  <p className="font-medium text-accent">Explication vidéo disponible</p>
                                  <p className="text-sm text-muted-foreground">
                                    Regardez notre expert expliquer cette fonctionnalité en détail
                                  </p>
                                </div>
                                <button className="ml-auto text-accent hover:text-accent/80 transition-colors">
                                  <Icon name="ExternalLink" size={16} />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques 
              sur FaceKey et vous accompagner dans votre projet.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-6 text-center hover:shadow-card transition-shadow duration-250">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Appelez-nous</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Parlez directement à un expert
                </p>
                <p className="text-primary font-medium">+33 1 23 45 67 89</p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center hover:shadow-card transition-shadow duration-250">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Écrivez-nous</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Réponse sous 2h ouvrées
                </p>
                <p className="text-primary font-medium">support@facekey.fr</p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center hover:shadow-card transition-shadow duration-250">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageSquare" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Chat en direct</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Assistance immédiate
                </p>
                <p className="text-secondary font-medium">Disponible 9h-18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Explorez notre base de connaissances complète
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Icon name="Book" size={16} />
              <span>Documentation technique</span>
            </button>
            <button className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Icon name="Video" size={16} />
              <span>Tutoriels vidéo</span>
            </button>
            <button className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Icon name="Download" size={16} />
              <span>Guides PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;