import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import { supabase } from '../supabase';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Registration: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [certFile, setCertFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    if (!certFile || !cvFile) {
      alert(t('missingFilesAlert'));
      setLoading(false);
      return;
    }

    const certExt = certFile.name.split('.').pop();
    const certName = `cert-${Date.now()}.${certExt}`;
    const { error: certUploadError } = await supabase.storage
      .from('certificados')
      .upload(certName, certFile);

    if (certUploadError) {
      alert(t('errorCertificado'));
      setLoading(false);
      return;
    }

    const { data: certPublic } = supabase.storage.from('certificados').getPublicUrl(certName);
    const certURL = certPublic?.publicUrl;
    if (!certURL) {
      alert(t('errorCertUrl'));
      setLoading(false);
      return;
    }

    const cvExt = cvFile.name.split('.').pop();
    const cvName = `cv-${Date.now()}.${cvExt}`;
    const { error: cvUploadError } = await supabase.storage
      .from('curriculos')
      .upload(cvName, cvFile);

    if (cvUploadError) {
      alert(t('errorCv'));
      setLoading(false);
      return;
    }

    const { data: cvPublic } = supabase.storage.from('curriculos').getPublicUrl(cvName);
    const cvURL = cvPublic?.publicUrl;
    if (!cvURL) {
      alert(t('errorCvUrl'));
      setLoading(false);
      return;
    }

    const motivacao = form.motivacao.value.slice(0, 200);
    const experiencia = form.experiencia.value.slice(0, 200);
    const email = form.email.value;

    const { error } = await supabase.from('inscricoes').insert([{
      nome: form.nome.value,
      idade: form.idade.value,
      email,
      whatsapp: form.whatsapp.value,
      pais: form.pais.value,
      ensino_medio: form.medio.value,
      genero: form.genero?.value || '',
      internet: form['sec3-0'].value,
      ambiente: form['sec3-1'].value,
      compromisso: form['sec3-2'].value,
      veracidade: form.veracidade.value,
      certificado: certURL,
      cv: cvURL,
      motivacao,
      experiencia,
      data: new Date().toISOString(),
    }]);

    if (error) {
      alert(t('submitError'));
      setLoading(false);
    } else {
      emailjs.send(
        'service_oo57208',
        'template_bmawjvn',
        {
          name: form.nome.value,
          to_name: form.nome.value,
          to_email: email,
          reply_to: email,
          time: new Date().toLocaleString(),
          message: 'Sua inscrição foi recebida com sucesso!'
        },
        'D9l-p1qwPw9d-3x8f'
      ).then(() => {
        console.log('E-mail de confirmação enviado com sucesso.');
      }).catch((err) => {
        console.error('Erro ao enviar e-mail de confirmação:', err);
      });

      setShowSuccessModal(true);
      form.reset();
      setCertFile(null);
      setCvFile(null);
    }

    setLoading(false);
  };

  return (
    <div>
      <Header />
      <main className="bg-gray-100 min-h-screen px-4 pt-24 pb-10">
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-2">✅ {t('submitSuccess')}</h2>
              <p className="text-gray-700 mb-4">{t('postSubmitNote')}</p>
              <button
                className="bg-[#002868] text-white px-4 py-2 rounded hover:bg-[#004080] mt-2 w-full"
                onClick={() => setShowSuccessModal(false)}
              >
                OK
              </button>
            </motion.div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">
          <h1 className="text-3xl font-bold text-[#002868] mb-2">{t('formTitle')}</h1>
          <p className="text-gray-700 mb-6">
            📝 <strong>{t('formSubtitle')}</strong><br />
            {t('formDescription')}<br />
            🗓 {t('formPeriod')}<br />
            💻 {t('formBenefits')}
          </p>

          <hr className="my-6" />
          <h2 className="text-xl font-semibold text-[#002868] mb-4">{t('section1Title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input required type="text" name="nome" placeholder={t('namePlaceholder')} className="border p-2 rounded w-full" />
            <input required type="text" name="idade" placeholder={t('agePlaceholder')} className="border p-2 rounded w-full" />
            <div className="col-span-2">
              <label className="block mb-1">{t('genderLabel')}</label>
              <div className="flex flex-wrap gap-4">
                <label><input type="radio" name="genero" value="Masculino" className="mr-2" />{t('genderMasculino')}</label>
                <label><input type="radio" name="genero" value="Feminino" className="mr-2" />{t('genderFeminino')}</label>
                <label><input type="radio" name="genero" value="Outro" className="mr-2" />{t('genderOutro')}</label>
              </div>
            </div>
            <input required type="text" name="pais" placeholder={t('countryPlaceholder')} className="border p-2 rounded w-full" />
            <input required type="email" name="email" placeholder={t('emailPlaceholder')} className="border p-2 rounded w-full" />
            <input required type="text" name="whatsapp" placeholder={t('whatsappPlaceholder')} className="border p-2 rounded w-full" />
          </div>

          <hr className="my-6" />
          <h2 className="text-xl font-semibold text-[#002868] mb-4">{t('section2Title')}</h2>
          <label>{t('ensinoMedioQuestion')}</label>
          <div className="flex gap-4 mb-4">
            <label><input type="radio" name="medio" value="Sim" required className="mr-2" />{t('ensinoMedioSim')}</label>
            <label><input type="radio" name="medio" value="Nao" required className="mr-2" />{t('ensinoMedioNao')}</label>
          </div>
          <label className="font-medium block">{t('uploadCertLabel')}</label>
          <input required type="file" accept="application/pdf" onChange={e => setCertFile(e.target.files?.[0] || null)} className="border p-2 rounded w-full mb-4" />
          <label className="font-medium block">{t('uploadCvLabel')}</label>
          <input required type="file" accept="application/pdf" onChange={e => setCvFile(e.target.files?.[0] || null)} className="border p-2 rounded w-full" />

          <hr className="my-6" />
          <h2 className="text-xl font-semibold text-[#002868] mb-4">{t('section3Title')}</h2>
          {[t('internetQuestion'), t('ambienteQuestion'), t('compromissoQuestion')].map((question, i) => (
            <div className="mb-4" key={i}>
              <label>{question}</label>
              <div className="flex gap-4">
                <label><input type="radio" name={`sec3-${i}`} value="Sim" required className="mr-2" />{t('radioSim')}</label>
                <label><input type="radio" name={`sec3-${i}`} value="Nao" required className="mr-2" />{t('radioNao')}</label>
              </div>
            </div>
          ))}

          <hr className="my-6" />
          <h2 className="text-xl font-semibold text-[#002868] mb-4">{t('section4Title')}</h2>
          <textarea name="motivacao" placeholder={t('motivacaoPlaceholder')} maxLength={200} className="border p-2 rounded w-full h-28 mb-4" />
          <textarea name="experiencia" placeholder={t('experienciaPlaceholder')} maxLength={200} className="border p-2 rounded w-full h-28" />

          <hr className="my-6" />
          <h2 className="text-xl font-semibold text-[#002868] mb-4">{t('section5Title')}</h2>
          <label className="block mb-2">{t('veracidadeLabel')}</label>
          <div className="flex gap-4 mb-6">
            <label><input type="radio" name="veracidade" value="Sim" required className="mr-2" />{t('veracidadeSim')}</label>
            <label><input type="radio" name="veracidade" value="Nao" required className="mr-2" />{t('veracidadeNao')}</label>
          </div>

          <button type="submit" disabled={loading} className="bg-[#002868] text-white px-6 py-2 rounded hover:bg-[#004080] w-full sm:w-auto">
            {loading ? t('loadingButton') : t('submitButton')}
          </button>

          <p className="text-sm text-gray-600 mt-4">{t('postSubmitNote')}</p>
        </form>
      </main>
    </div>
  );
};

export default Registration;