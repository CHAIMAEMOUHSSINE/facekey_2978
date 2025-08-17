import React, { useState, useRef } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SolutionSection = () => {
  const [activeDemo, setActiveDemo] = useState('upload');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

  const demoSteps = [
    {
      id: 'upload',
      title: 'Téléchargement',
      icon: 'Upload',
      description: 'L\'employé se présente devant la caméra'
    },
    {
      id: 'scan',
      title: 'Analyse',
      icon: 'Scan',
      description: 'Reconnaissance faciale en temps réel'
    },
    {
      id: 'verify',
      title: 'Vérification',
      icon: 'Shield',
      description: 'Validation de l\'identité'
    },
    {
      id: 'record',
      title: 'Enregistrement',
      icon: 'Check',
      description: 'Pointage automatique enregistré'
    }
  ];

  const technologyFeatures = [
    {
      title: 'IA Avancée',
      description: 'Algorithmes de deep learning dernière génération',
      icon: 'Brain',
      metric: '99.9% précision'
    },
    {
      title: 'Temps Réel',
      description: 'Traitement instantané en moins de 0.5 seconde',
      icon: 'Zap',
      metric: '< 0.5s'
    },
    {
      title: 'Anti-Spoofing',
      description: 'Protection contre les tentatives de fraude',
      icon: 'Shield',
      metric: '100% sécurisé'
    },
    {
      title: 'Multi-Conditions',
      description: 'Fonctionne dans toutes les conditions d\'éclairage',
      icon: 'Sun',
      metric: '24/7 actif'
    }
  ];

  const handleImageUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e?.target?.result);
        simulateAnalysis();
      };
      reader?.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setActiveDemo('scan');
    
    setTimeout(() => {
      setActiveDemo('verify');
      setTimeout(() => {
        setActiveDemo('record');
        setAnalysisResult({
          confidence: 99.7,
          processingTime: 0.3,
          status: 'verified',
          employee: 'Marie Dubois',
          department: 'Marketing'
        });
        setIsAnalyzing(false);
      }, 1000);
    }, 1500);
  };

  const resetDemo = () => {
    setActiveDemo('upload');
    setUploadedImage(null);
    setAnalysisResult(null);
    setIsAnalyzing(false);
  };

  return (
    <section id="solution" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Solution révolutionnaire
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            La reconnaissance faciale{' '}
            <span className="text-primary">nouvelle génération</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment notre technologie IA transforme la gestion des présences 
            avec une précision inégalée et une simplicité d'utilisation révolutionnaire.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Demo Interface */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Testez la reconnaissance faciale
              </h3>
              
              {/* Process Steps */}
              <div className="flex justify-between mb-6">
                {demoSteps?.map((step, index) => (
                  <div key={step?.id} className="flex flex-col items-center space-y-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeDemo === step?.id
                        ? 'bg-primary text-white'
                        : demoSteps?.findIndex(s => s?.id === activeDemo) > index
                        ? 'bg-accent text-white' :'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={step?.icon} size={16} />
                    </div>
                    <div className="text-xs text-center">
                      <div className="font-medium">{step?.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Area */}
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative">
              {!uploadedImage ? (
                <div className="text-center space-y-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => fileInputRef?.current?.click()}
                    iconName="Camera"
                    iconPosition="left"
                  >
                    Télécharger une photo
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Ou utilisez votre webcam pour tester
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={uploadedImage}
                    alt="Photo téléchargée"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Analysis Overlay */}
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-white font-medium">Analyse en cours...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Results Overlay */}
                  {analysisResult && (
                    <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                      <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 m-4 space-y-4">
                        <div className="flex items-center space-x-2 text-accent">
                          <Icon name="CheckCircle" size={24} />
                          <span className="font-semibold">Identité vérifiée</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>Employé: <span className="font-medium">{analysisResult?.employee}</span></div>
                          <div>Département: <span className="font-medium">{analysisResult?.department}</span></div>
                          <div>Confiance: <span className="font-medium text-accent">{analysisResult?.confidence}%</span></div>
                          <div>Temps: <span className="font-medium">{analysisResult?.processingTime}s</span></div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={resetDemo}
                          fullWidth
                        >
                          Tester à nouveau
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right - Technology Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Technologie de pointe
              </h3>
              <p className="text-muted-foreground mb-8">
                Notre système utilise les dernières avancées en intelligence artificielle 
                pour garantir une reconnaissance faciale ultra-précise et sécurisée.
              </p>
            </div>

            <div className="grid gap-6">
              {technologyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-250">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{feature?.title}</h4>
                      <span className="text-sm font-medium text-accent">{feature?.metric}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} color="var(--color-accent)" className="mt-0.5" />
                <div>
                  <p className="font-medium text-accent mb-2">Conformité RGPD garantie</p>
                  <p className="text-sm text-muted-foreground">
                    Toutes les données biométriques sont chiffrées et stockées selon 
                    les standards européens les plus stricts. Aucune donnée n'est 
                    partagée avec des tiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Visualization */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Processus automatisé en 4 étapes
            </h3>
            <p className="text-muted-foreground">
              De l'arrivée de l'employé à l'enregistrement automatique
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {demoSteps?.map((step, index) => (
              <div key={step?.id} className="text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step?.icon} size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step?.title}</h4>
                <p className="text-sm text-muted-foreground">{step?.description}</p>
                
                {index < demoSteps?.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-border relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <Icon name="ChevronRight" size={16} color="var(--color-border)" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;