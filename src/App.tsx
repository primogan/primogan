import React, { useState, useEffect } from 'react';
import { Phone, Mail, Palmtree as PalmTree, Trees, Shovel, Droplets } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AccessibilityToolbar from './components/AccessibilityToolbar';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  projectType: string;
  location: string;
}

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(1);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    projectType: '',
    location: ''
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFontSizeChange = (size: number) => {
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}rem`;
  };

  const handleContrastChange = (isHighContrast: boolean) => {
    setIsHighContrast(isHighContrast);
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const handleThemeChange = (isDark: boolean) => {
    setIsDark(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const planters = [
    {
      id: 1,
      name: 'אדנית ברזל לבנה',
      image: '/images/planter-white.jpg',
      description: 'אדנית ברזל בגימור לבן מט'
    },
    {
      id: 2,
      name: 'אדנית ברזל שחורה',
      image: '/images/planter-black.jpg',
      description: 'אדנית ברזל בגימור שחור מט'
    },
    {
      id: 3,
      name: 'אדנית ברזל מחלידה',
      image: '/images/planter-rust.jpg',
      description: 'אדנית ברזל בגימור חלודה טבעית'
    }
  ];

  const verticalGardens = [
    {
      id: 1,
      name: 'קיר ירוק למשרד',
      image: '/images/vertical-office.jpg',
      description: 'שילוב מושלם של טבע בסביבת העבודה'
    },
    {
      id: 2,
      name: 'קיר ירוק לבית',
      image: '/images/vertical-home.jpg',
      description: 'הוספת חיים וצבע לחלל המגורים'
    },
    {
      id: 3,
      name: 'קיר ירוק לחצר',
      image: '/images/vertical-yard.jpg',
      description: 'יצירת אווירה טרופית בחצר הבית'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the WhatsApp message
    const whatsappMessage = `שלום, אני ${formData.name}%0A
טלפון: ${formData.phone}%0A
אימייל: ${formData.email}%0A
סוג הפרויקט: ${formData.projectType}%0A
מיקום: ${formData.location}%0A
פרטים נוספים: ${formData.message}`;

    // Open WhatsApp with the message
    window.open(`https://wa.me/972542001104?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      projectType: '',
      location: ''
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white text-right ${isHighContrast ? 'high-contrast' : ''} ${isDark ? 'dark' : ''}`} dir="rtl" role="main" aria-label="Primo Gan - תכנון וביצוע גינות">
      <AccessibilityToolbar
        onFontSizeChange={handleFontSizeChange}
        onContrastChange={handleContrastChange}
        onThemeChange={handleThemeChange}
      />
      {/* Hero Section */}
      <section className="relative h-screen" aria-label="ראשי">
        <div className="absolute inset-0">
          <img
            src="/images/hero-garden.jpg"
            alt="נוף גינה יפה"
            className="w-full h-full object-cover"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" aria-hidden="true"></div>
        </div>
        <div className="relative w-full h-full flex flex-col justify-between">
          <div className="w-full px-4 pt-32 flex justify-end">
            <div className="text-white mr-[25%]">
              <h1 className="text-7xl md:text-9xl font-normal mb-6 leading-tight">
                <span className="english-brand text-slate-50 inline-block drop-shadow-md" aria-label="PRIMO-GAN">
                  PRIMO-GAN
                </span>
              </h1>
            </div>
          </div>
          
          <div className="w-full px-12 pb-12">
            <button
              onClick={() => {
                if (isMobile) {
                  window.location.href = 'https://wa.me/972542001104';
                } else {
                  window.location.href = 'tel:+972542001104';
                }
              }}
              className="bg-gradient-to-r from-[#5F7161] to-[#6D8B74] hover:from-[#526153] hover:to-[#5c7461] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium tracking-wide flex items-center gap-3"
              aria-label={isMobile ? "צור קשר בוואטסאפ" : "צור קשר בטלפון"}
            >
              {isMobile ? (
                <>
                  054-200-1104
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </>
              ) : (
                <>
                  054-200-1104
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white" aria-label="שירותים">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">השירותים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" role="article">
              <PalmTree className="h-16 w-16 text-emerald-600 mb-6 mx-auto" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-center">תכנון גינות</h3>
              <p className="text-gray-600 text-center leading-relaxed">תכנון מקצועי ומותאם אישית לצרכים שלכם</p>
            </div>
            <div className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" role="article">
              <Trees className="h-16 w-16 text-emerald-600 mb-6 mx-auto" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-center">גיזום וכריתת עצים</h3>
              <p className="text-gray-600 text-center leading-relaxed">גיזום וכריתת עצים בכל גודל וסוג</p>
            </div>
            <div className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" role="article">
              <Shovel className="h-16 w-16 text-emerald-600 mb-6 mx-auto" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-center">תחזוקת גינות</h3>
              <p className="text-gray-600 text-center leading-relaxed">שירותי תחזוקה שוטפים לשמירה על גינה מטופחת</p>
            </div>
            <div className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" role="article">
              <Droplets className="h-16 w-16 text-emerald-600 mb-6 mx-auto" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-center">מערכות השקיה</h3>
              <p className="text-gray-600 text-center leading-relaxed">התקנה ותחזוקה של מערכות השקיה חכמות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
        <p className="text-2xl text-center text-gray-600 mb-16">בנוסף אנחנו מתמחים גם ב...</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">אדניות ברזל</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="h-[600px]"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {planters.map((planter) => (
              <SwiperSlide key={planter.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="h-80 overflow-hidden">
                    <img
                      src={planter.image}
                      alt={planter.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{planter.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{planter.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Vertical Gardens Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">קירות ירוקים</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="h-[600px]"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {verticalGardens.map((garden) => (
              <SwiperSlide key={garden.id}>
                <div className="group relative h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src={garden.image}
                    alt={garden.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold mb-4">{garden.name}</h3>
                      <p className="text-lg opacity-90 leading-relaxed">{garden.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-16 px-4 bg-white" aria-label="לקוחות">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center"> הלקוחות שלנו</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center" role="list">
            <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300" role="listitem">
              <img src="/logos/ariel.jpg" alt="Ariel" className="w-full h-full object-contain" />
            </div>
            <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300" role="listitem">
              <img src="/logos/amot.jpg" alt="Amot" className="w-full h-full object-contain" />
            </div>
            <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300" role="listitem">
              <img src="/logos/alide.jpg" alt="Alide" className="w-full h-full object-contain" />
            </div>
            <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300" role="listitem">
              <img src="/logos/pais.jpg" alt="Pais" className="w-full h-full object-contain" />
            </div>
            <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300" role="listitem">
              <img src="/logos/supervision.jpg" alt="Supervision" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white" aria-label="צור קשר">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">השאירו פרטים לשיחת ייעוץ והצעת מחיר</h2>
          <form onSubmit={handleSubmit} className="space-y-8" aria-label="טופס יצירת קשר">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-3 text-lg">שם מלא</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                aria-required="true"
                style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-3 text-lg">טלפון</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                aria-required="true"
                style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-3 text-lg">אימייל</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                aria-required="true"
                style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-gray-700 font-medium mb-3 text-lg">סוג הפרויקט</label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                required
                aria-required="true"
                style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}
              >
                <option value="">בחר סוג פרויקט</option>
                <option value="garden">תכנון וביצוע גינה</option>
                <option value="maintenance">תחזוקת גינה</option>
                <option value="irrigation">מערכת השקיה</option>
                <option value="planter">אדנית ברזל</option>
                <option value="other">אחר</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-3 text-lg">מיקום הפרויקט</label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
                aria-required="true"
                placeholder="עיר / שכונה"
                style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-3 text-lg">פרטים נוספים</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="ספר/י לנו קצת על הפרויקט..."
                style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5F7161] to-[#6D8B74] hover:from-[#526153] hover:to-[#5c7461] text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                aria-label="שלח פנייה"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                שלח פנייה בוואטסאפ
              </button>
            </div>
          </form>
          <div className="mt-12 flex justify-center gap-6">
            <button 
              onClick={() => {
                if (isMobile) {
                  window.location.href = 'https://wa.me/972542001104';
                } else {
                  window.location.href = 'tel:+972542001104';
                }
              }}
              className="bg-gradient-to-r from-[#5F7161] to-[#6D8B74] hover:from-[#526153] hover:to-[#5c7461] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium tracking-wide flex items-center gap-2"
              aria-label={isMobile ? "צור קשר בוואטסאפ" : "צור קשר בטלפון"}
            >
              {isMobile ? (
                <>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  צור קשר בוואטסאפ
                </>
              ) : (
                <>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  054-200-1104
                </>
              )}
            </button>
            <a href="mailto:primo.gan.ltd@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300" aria-label="שלח אימייל">
              <Mail className="h-6 w-6" aria-hidden="true" />
              <span className="text-lg">primo.gan.ltd@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;