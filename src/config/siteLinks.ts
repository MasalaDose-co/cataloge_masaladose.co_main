/**
 * MasalaDose Centralized Stage Links Configuration
 * 
 * Replace these placeholder URLs with your live production stage URL endpoints.
 * All navigation buttons across the site utilize these export variables.
 */

export const STAGE_1_URL = "https://stage1-masaladose-co.vercel.app/";
export const STAGE_2_URL = "https://growth.masaladose.co";
export const STAGE_3_URL = "https://scale.masaladose.co";

export interface StageLink {
  id: "stage-01" | "stage-02" | "stage-03";
  title: string;
  url: string;
}

export const SITE_STAGE_LINKS: Record<string, string> = {
  "01": STAGE_1_URL,
  "02": STAGE_2_URL,
  "03": STAGE_3_URL,
};
