import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="HardHat" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">РемСтрой</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
              <a href="#prices" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
              <a href="#warranty" className="text-gray-600 hover:text-primary transition-colors">Гарантии</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-secondary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary text-white px-6 py-2 rounded-lg inline-block mb-6 font-bold text-lg">
                РЕМОНТ КВАРТИР, ОФИСОВ, СКЛАДСКИХ ПОМЕЩЕНИЙ ПОД КЛЮЧ!
              </div>
              <h1 className="text-5xl font-bold mb-6">
                БОЛЕЕ 78 ВЫПОЛНЕННЫХ ПРОЕКТОВ
              </h1>
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  СКИДКА 15% ДЛЯ ПЕРВЫХ КЛИЕНТОВ!
                </h2>
                <p className="text-primary text-xl font-semibold">
                  РЕМОНТ КВАРТИР, ОФИСОВ, СКЛАДСКИХ ПОМЕЩЕНИЙ ПОД КЛЮЧ!
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-green-400 font-medium">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ И СМЕТА!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-green-400 font-medium">ГАРАНТИЯ НА ВСЕ ВИДЫ РАБОТ ОТ 2 ДО 5 ЛЕТ!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-green-400 font-medium">ЦЕНЫ НИЖЕ НА 15% ЧЕМ У КОНКУРЕНТОВ!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-primary font-medium">БЕСПЛАТНАЯ ДОСТАВКА МАТЕРИАЛОВ!</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">
                  <span className="text-blue-300">+7 900-560-66-91</span> (Даниил инженер)
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-blue-300">+7 999-791-77-02</span> (Максим менеджер)
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=300&h=200&fit=crop" 
                  alt="Ремонт квартиры" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=200&fit=crop" 
                  alt="Ремонт офиса" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=200&fit=crop" 
                  alt="Складское помещение" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop" 
                  alt="Электромонтажные работы" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр работ по ремонту и отделке</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Home" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-secondary">Ремонт квартир</h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Косметический ремонт</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Капитальный ремонт</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Евроремонт</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Дизайнерский ремонт</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  От 2 500 ₽/м²
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Building2" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-secondary">Ремонт офисов</h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Отделка под ключ</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Зонирование пространства</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Современные материалы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Быстрые сроки</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  От 1 800 ₽/м²
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Warehouse" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-secondary">Складские помещения</h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Промышленные полы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Утепление и гидроизоляция</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Электромонтажные работы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Вентиляция</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  От 1 200 ₽/м²
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600">Более 78 успешно завершённых проектов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/10595211-e21a-400b-8c3c-f7875381e0f3.jpg"
                alt="Ремонт офисного помещения"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Офисное помещение</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Современный офис с подвесными потолками и системой кондиционирования
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">180 м²</Badge>
                  <span className="text-green-600 font-semibold text-sm">Завершён</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/1ea6fab6-db46-4b4f-86cc-65743dc043f3.jpg"
                alt="Складской комплекс"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Складской комплекс</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Промышленный склад с бетонными полами и системой освещения
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">1200 м²</Badge>
                  <span className="text-green-600 font-semibold text-sm">Завершён</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/56a3e6e9-d4d0-4862-808d-bc97d4fb653e.jpg"
                alt="Отделка гостиной"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Гостиная в загородном доме</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Уютная гостиная с деревянными балками и панорамными окнами
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">45 м²</Badge>
                  <span className="text-green-600 font-semibold text-sm">Завершён</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/47ec825c-0911-4048-ba76-571f866f172b.jpeg"
                alt="Промышленный пол в гараже"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Полимерные полы в гараже</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Прочное покрытие для автосервиса с противоскользящим эффектом
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">180 м²</Badge>
                  <span className="text-green-600 font-semibold text-sm">Завершён</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/867f9804-5d75-4eab-aa5b-2612ffca4cd6.jpg"
                alt="Ремонт офисного помещения"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Офисное помещение</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Комплексная отделка офиса с современными материалами
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">120 м²</Badge>
                  <span className="text-green-600 font-semibold text-sm">Завершён</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/d364c1e6-f643-4bfb-b471-6bfc494a0cee.jpg"
                alt="Складское помещение"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Складской комплекс</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Промышленное покрытие пола и электромонтажные работы
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">850 м²</Badge>
                  <span className="text-green-600 font-semibold text-sm">Завершён</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section id="warranty" className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Гарантии на все виды работ</h2>
            <p className="text-xl opacity-90">Мы уверены в качестве нашей работы</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Гарантия 2 года</h3>
                <p className="opacity-90">На косметический ремонт и отделочные работы</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="ShieldCheck" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Гарантия 3 года</h3>
                <p className="opacity-90">На капитальный ремонт и инженерные системы</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Гарантия 5 лет</h3>
                <p className="opacity-90">На электромонтажные работы и сантехнику</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Цены на услуги</h2>
            <p className="text-xl text-gray-600">Прозрачное ценообразование без скрытых доплат</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Ремонт квартир</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Косметический ремонт</span>
                    <span className="font-semibold">от 2 500 ₽/м²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Капитальный ремонт</span>
                    <span className="font-semibold">от 4 500 ₽/м²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Евроремонт</span>
                    <span className="font-semibold">от 6 500 ₽/м²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Дизайнерский ремонт</span>
                    <span className="font-semibold">от 8 500 ₽/м²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Коммерческие объекты</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Офисные помещения</span>
                    <span className="font-semibold">от 1 800 ₽/м²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Торговые площади</span>
                    <span className="font-semibold">от 2 200 ₽/м²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Складские помещения</span>
                    <span className="font-semibold">от 1 200 ₽/м²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Производственные цеха</span>
                    <span className="font-semibold">от 1 500 ₽/м²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Badge className="bg-primary text-white text-lg px-6 py-2 mb-4">
              Скидка 15% для первых клиентов!
            </Badge>
            <p className="text-gray-600">Точная стоимость рассчитывается после осмотра объекта</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                "РемСтрой" - ведущая строительно-ремонтная компания в Вологде с опытом работы более 10 лет. 
                Мы специализируемся на комплексном ремонте жилых и коммерческих помещений.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Профессиональная команда</h4>
                    <p className="text-gray-600">25+ опытных мастеров и инженеров</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Trophy" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">78+ проектов</h4>
                    <p className="text-gray-600">Успешно завершённых объектов</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">10+ лет опыта</h4>
                    <p className="text-gray-600">На рынке строительных услуг</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" 
                alt="Наша команда"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Телефоны</h4>
                    <p className="text-gray-600">+7 900-560-66-91 (Даниил инженер)</p>
                    <p className="text-gray-600">+7 999-791-77-02 (Максим менеджер)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Адрес</h4>
                    <p className="text-gray-600">г. Вологда, ул. Строительная, 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 8:00-18:00</p>
                    <p className="text-gray-600">Сб-Вс: 9:00-15:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Оставить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" />
                  </div>
                  <div>
                    <Input placeholder="Тип работ" />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Описание объекта"
                      className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                    Получить консультацию
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="HardHat" size={32} className="text-primary" />
              <span className="text-2xl font-bold">РемСтрой</span>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">© 2024 РемСтрой. Все права защищены.</p>
              <p className="text-sm opacity-75">Лицензия на строительную деятельность №12345</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;