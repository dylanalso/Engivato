export const SITE_URL = 'https://engivato.com';
export const COMPANY_EMAIL = 'admin@engivato.com';
export const COMPANY_PHONE = '2147894783';
export const COMPANY_HOURS = 'Monday - Friday, 8:00 AM - 5:00 PM CST';

// Format a 10-digit US phone number as (XXX) XXX-XXXX for display
export function formatPhoneDisplay(phone = COMPANY_PHONE) {
  const digits = String(phone || '').replace(/\D/g, '');
  const normalized = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (normalized.length === 10) {
    return `(${normalized.slice(0, 3)}) ${normalized.slice(3, 6)}-${normalized.slice(6)}`;
  }
  return String(phone || '');
}

// Format a phone number as a dialable tel: link
export function formatPhoneHref(phone = COMPANY_PHONE) {
  const digits = String(phone || '').replace(/\D/g, '');
  const normalized = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (normalized.length === 10) {
    return `tel:+1${normalized}`;
  }
  return digits ? `tel:${digits}` : `tel:+1${COMPANY_PHONE}`;
}

// Format a phone number as +1-XXX-XXX-XXXX for Schema.org structured data
export function formatPhoneSchema(phone = COMPANY_PHONE) {
  const digits = String(phone || '').replace(/\D/g, '');
  const normalized = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (normalized.length === 10) {
    return `+1-${normalized.slice(0, 3)}-${normalized.slice(3, 6)}-${normalized.slice(6)}`;
  }
  return String(phone || '');
}
