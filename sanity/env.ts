export const apiVersion = '1';

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_STUDIO_DATASET'
);

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_PROJECT_ID'
);

export const sanityAPI = assertValue(
  process.env.SANITY_API_VERSION,
  'Missing environment variable: SANITY_API_VERSION'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
