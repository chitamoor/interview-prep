/**
 * GDPR Consent Management — Core Logic
 *
 * Pure TypeScript, no framework dependencies.
 * Persists consent in localStorage under "gdpr_consent".
 * Version-controlled: bump CURRENT_VERSION to force re-consent when
 * categories change.
 *
 * Reusable: copy this file into any project.
 */

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

export interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentRecord {
  version: number;
  timestamp: string;
  decided: boolean;
  categories: ConsentPreferences;
}

const STORAGE_KEY = 'gdpr_consent';
const CURRENT_VERSION = 1;

const DEFAULTS: ConsentRecord = {
  version: CURRENT_VERSION,
  timestamp: new Date().toISOString(),
  decided: false,
  categories: { necessary: true, analytics: false, marketing: false },
};

export function getConsent(): ConsentRecord {
  if (typeof localStorage === 'undefined') return { ...DEFAULTS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed: ConsentRecord = JSON.parse(raw);
    // Discard stale consent records when the version bumps
    if (parsed.version !== CURRENT_VERSION) return { ...DEFAULTS };
    return parsed;
  } catch {
    return { ...DEFAULTS };
  }
}

export function saveConsent(prefs: Partial<ConsentPreferences>): ConsentRecord {
  const current = getConsent();
  const record: ConsentRecord = {
    version: CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    decided: true,
    categories: {
      necessary: true, // always required
      analytics: prefs.analytics ?? current.categories.analytics,
      marketing: prefs.marketing ?? current.categories.marketing,
    },
  };
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  }
  window.dispatchEvent(new CustomEvent('consent-updated', { detail: record }));
  return record;
}

export function acceptAll(): ConsentRecord {
  return saveConsent({ necessary: true, analytics: true, marketing: true });
}

export function rejectAll(): ConsentRecord {
  return saveConsent({ necessary: true, analytics: false, marketing: false });
}

export function clearConsent(): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function hasDecided(): boolean {
  return getConsent().decided;
}

export function hasConsent(category: ConsentCategory): boolean {
  return getConsent().categories[category] === true;
}

export function analyticsAllowed(): boolean {
  return hasConsent('analytics');
}

export function marketingAllowed(): boolean {
  return hasConsent('marketing');
}
