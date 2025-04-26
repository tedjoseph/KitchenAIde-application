/*
   All asset files are stored in the /public/resources directory.
   assetRegistry.js provides a centralized mapping for accessing these resources across the app.
   Sample new entry: <Key Name>: `${basePath}<File Name>`
*/

export const audio = {};

const basePath = "/resources/";

   export const media = {
   gifs: {
      analytics: `${basePath}analytics.gif`,
      dashboard: `${basePath}dashboard.gif`,
      income: `${basePath}income.gif`,
      ai_insights: `${basePath}turing-test.gif`,
      success: `${basePath}success.gif`,
   },
   pngs: {
      accounting_v1: `${basePath}account.png`,
      accounting_v2: `${basePath}accounting.png`,
      ai_robot_v1: `${basePath}ai_icon_v1.png`,
      ai_robot_v2: `${basePath}ai_icon_v2.png`,
      budgeting: `${basePath}budgeting.png`,
      business_target: `${basePath}business_target.png`,
      company_logo_transparent: `${basePath}company_logo_transparent.png`,
      company_logo: `${basePath}company_logo.png`,
      cross_platform: `${basePath}cross_platform_icon.png`,
      profile_icon: `${basePath}profile_icon.png`,
      reports: `${basePath}reports_icon.png`,
   },
   svgs: {},
   images: {},
};


const assets = { audio, media };

export default assets;