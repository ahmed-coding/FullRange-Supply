import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useThemeClasses';

// const labels = {
//   name: { en: 'Name', ar: 'الاسم', zh: '姓名' },
//   email: { en: 'Email', ar: 'البريد الإلكتروني', zh: '邮箱' },
//   country: { en: 'Country', ar: 'البلد', zh: '国家' },
//   message: { en: 'Message', ar: 'الرسالة', zh: '留言' },
//   send: { en: 'Send Message', ar: 'إرسال الرسالة', zh: '发送消息' },
//   contactInfo: { en: 'Contact Information', ar: 'معلومات الاتصال', zh: '联系信息' },
//   phone: { en: 'Phone', ar: 'الهاتف', zh: '电话' },
//   location: { en: 'Location', ar: 'الموقع', zh: '位置' },
//   whatsapp: { en: 'WhatsApp', ar: 'واتساب', zh: 'WhatsApp' },
//   emailUs: { en: 'Email Us', ar: 'راسلنا', zh: '发邮件' }
// };

export default function Contact({ content }) {
  const { t } = useLanguage();
  const { theme, currentTheme } = useTheme();
  const classes = useThemeClasses(currentTheme);
  const contact = content?.contact || {};
  const section = content?.contactSection || {};
  const labels = content?.contactSection.labels || {};

  // Get theme-specific colors and styles
  const bgStyle = {
    background: theme?.colors?.backgroundDark ? `linear-gradient(to bottom, ${theme.colors.backgroundDark}, ${theme.colors.secondary})` : 'linear-gradient(to bottom, #0a1628, #0f2744)',
  };
  const accentColor = theme?.colors?.primary || '#d4af37';
  const textColor = theme?.colors?.text || '#ffffff';
  const textLightColor = theme?.colors?.textLight || '#a0aec0';
  const secondaryBg = theme?.colors?.secondary || '#0f2744';

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    window.location.href = `mailto:${contact.email}?subject=Inquiry from ${data.name}&body=Name: ${data.name}%0AEmail: ${data.email}%0ACountry: ${data.country}%0AMessage: ${data.message}`;
  };

  return (
    <section id="contact" className="py-24 transition-colors duration-300" style={bgStyle}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm font-medium transition-colors duration-300" style={{ color: accentColor }}>{t({ en: 'Contact Us', ar: 'اتصل بنا', zh: '联系我们' })}</span>
          <h2 className={`${classes.getHeadingClasses('h2')} mt-4 mb-6 transition-colors duration-300`} style={{ color: textColor }}>{t(section.title)}</h2>
          <p className={`max-w-2xl mx-auto text-lg transition-colors duration-300`} style={{ color: textLightColor }}>{t(section.description)}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className={`${classes.getFormLabelClasses()} transition-colors duration-300`} style={{ color: textColor }}>{t(labels.name)}</label>
                  <input id="contact-name" type="text" name="name" required className={classes.getFormInputClasses()} style={{
                    backgroundColor: secondaryBg,
                    borderColor: `${accentColor}30`,
                    color: textColor,
                  }} placeholder={t(labels.name)} aria-label={t(labels.name)} />
                </div>
                <div>
                  <label htmlFor="contact-email" className={`${classes.getFormLabelClasses()} transition-colors duration-300`} style={{ color: textColor }}>{t(labels.email)}</label>
                  <input id="contact-email" type="email" name="email" required className={classes.getFormInputClasses()} style={{
                    backgroundColor: secondaryBg,
                    borderColor: `${accentColor}30`,
                    color: textColor,
                  }} placeholder="email@example.com" aria-label={t(labels.email)} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-country" className={`${classes.getFormLabelClasses()} transition-colors duration-300`} style={{ color: textColor }}>{t(labels.country)}</label>
                <input id="contact-country" type="text" name="country" required className={classes.getFormInputClasses()} style={{
                  backgroundColor: secondaryBg,
                  borderColor: `${accentColor}30`,
                  color: textColor,
                }} placeholder={t(labels.country)} aria-label={t(labels.country)} />
              </div>
              <div>
                <label htmlFor="contact-message" className={`${classes.getFormLabelClasses()} transition-colors duration-300`} style={{ color: textColor }}>{t(labels.message)}</label>
                <textarea id="contact-message" name="message" rows={5} required className={`${classes.getFormInputClasses()} resize-none`} style={{
                  backgroundColor: secondaryBg,
                  borderColor: `${accentColor}30`,
                  color: textColor,
                }} placeholder={t({ en: 'Tell us about your needs...', ar: 'اخبرنا عن احتياجاتك...', zh: '告诉我们您的需求...' })} aria-label={t(labels.message)} />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className={`w-full py-4 font-semibold rounded-lg transition-colors min-h-12 ${classes.getButtonClasses('primary', 'md')}`} style={{
                backgroundColor: accentColor,
                color: theme?.colors?.secondary || '#0a1628',
              }}>
                {t(labels.send)}
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <div className={`${classes.getCardClasses('default')} rounded-xl p-6 transition-all duration-300`} style={{
              backgroundColor: `${accentColor}08`,
              borderColor: `${accentColor}20`,
            }}>
              <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300`} style={{ color: textColor }}>{t(labels.contactInfo)}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div><p className={`text-sm transition-colors duration-300`} style={{ color: textLightColor }}>{t(labels.email)}</p><a href={`mailto:${contact.email}`} className={`transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 rounded`} style={{ color: textColor }} onMouseEnter={(e) => e.target.style.color = accentColor} onMouseLeave={(e) => e.target.style.color = textColor}>{contact.email}</a></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div><p className={`text-sm transition-colors duration-300`} style={{ color: textLightColor }}>{t(labels.phone)}</p><a href={`tel:${contact.phone}`} className={`transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 rounded`} style={{ color: textColor }} onMouseEnter={(e) => e.target.style.color = accentColor} onMouseLeave={(e) => e.target.style.color = textColor}>{contact.phone}</a></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                  </div>
                  <div><p className={`text-sm transition-colors duration-300`} style={{ color: textLightColor }}>{t(labels.location)}</p><p className={`transition-colors duration-300`} style={{ color: textColor }}>{t(contact.location)}</p></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {contact.whatsapp && (
                <motion.a whileHover={{ scale: 1.02 }} href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 font-medium rounded-lg transition-colors min-h-12" style={{ backgroundColor: '#25D366', color: '#ffffff' }} aria-label={`${t(labels.whatsapp)} - opens in new window`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  {t(labels.whatsapp)}
                </motion.a>
              )}
              <motion.a whileHover={{ scale: 1.02 }} href={`mailto:${contact.email}`} className={`flex-1 flex items-center justify-center gap-2 py-3 font-medium rounded-lg transition-colors min-h-12 ${classes.getButtonClasses('secondary', 'md')}`} style={{
                borderColor: accentColor,
                color: accentColor,
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                {t(labels.emailUs)}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}