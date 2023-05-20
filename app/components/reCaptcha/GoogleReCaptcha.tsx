import ReCAPTCHA from 'react-google-recaptcha';

interface ReCAPTCHAInterface {
  handleRecaptchaChange: ((token: string | null) => void) | undefined;
  size?: 'compact' | 'normal' | 'invisible';
}

const GoogleReCaptcha = ({ handleRecaptchaChange, size = 'normal' }: ReCAPTCHAInterface) => {
  return (
    <ReCAPTCHA size={size} sitekey={process.env.GOOGLE_CAPTCHA_CLIENT_KEY as string} onChange={handleRecaptchaChange} />
  );
};

export default GoogleReCaptcha;
