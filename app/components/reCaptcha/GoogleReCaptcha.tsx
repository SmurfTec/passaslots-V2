import ReCAPTCHA from 'react-google-recaptcha';

interface ReCAPTCHAInterface {
  handleRecaptchaChange: ((token: string | null) => void) | undefined;
}

const GoogleReCaptcha = ({ handleRecaptchaChange }: ReCAPTCHAInterface) => {
  return <ReCAPTCHA sitekey={process.env.GOOGLE_CAPTCHA_CLIENT_KEY as string} onChange={handleRecaptchaChange} />;
};

export default GoogleReCaptcha;
