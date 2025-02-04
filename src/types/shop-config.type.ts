import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';

export {};

export interface MaxInstallment {
  markup: string;
  parcel: number;
  discount: number;
  interest: number;
  total: number;
  parcel_price: number;
}

export interface Creditcard {
  name: string;
  method: string;
  discount: number;
  parcels: number;
  total: number;
  parcel_price: number;
  has_interest: boolean;
  max_installment: MaxInstallment;
}

export interface Pix {
  name: string;
  method: string;
  discount: number;
  parcels: number;
  total: number;
  parcel_price: number;
  has_interest: boolean;
  max_installment: MaxInstallment;
}

export interface Billet {
  name: string;
  method: string;
  discount: number;
  parcels: number;
  total: number;
  parcel_price: number;
  has_interest: boolean;
  max_installment: MaxInstallment;
}

export interface Payments {
  creditcard: Creditcard;
  pix: Pix;
  billet: Billet;
}

export interface Image {
  id: any;
  src: string;
  alt: any;
  position: number;
}

export interface Brand {
  id: number;
  url: string;
  name: string;
  slug: string;
  position: any;
  description: string;
  hotsite_id: any;
  active: any;
  short_description: string;
  image: Image;
  banner: any;
  meta_title: any;
  meta_description: any;
  meta_keywords: any;
  created_at: any;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  url: string;
  position: any;
  depth: any;
  breadcrumb: string;
  active: any;
  parent_id: any;
  hotsite_id: any;
  external_id: any;
  description: string;
  image: any;
  banner: any;
  banner_link: any;
  google_taxonomy_id: number;
  meta_title: any;
  meta_description: any;
  meta_keywords: any;
  created_at: any;
}

export interface Value {
  id: number;
  feature_id: any;
  external_id: any;
  name: string;
  slug: string;
  image?: Image;
  position: any;
  active: boolean;
}

export interface Feature {
  id: number;
  name: string;
  slug: string;
  image?: Image;
  active: boolean;
  values: Value[];
}

export interface Variation {
  id: number;
  name: string;
  slug: string;
  gtin: string;
  product_id: number;
  color_id: any;
  grid_id: number;
  color_secondary_id: any;
  attribute_value_id: any;
  attribute_value_secondary_id: any;
  mpn: string;
  additional_shipping_time: any;
  external_id: string;
  min_quantity: number;
  max_quantity: any;
  reference: string;
  is_sell_in_kit_only: any;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  images: Image[];
  image: Image;
  video: any;
  additional_time_out_of_stock: number;
  balance: number;
  price: string;
  has_price_range: any;
  min_price_range: number;
  max_price_range: number;
  price_compare: number;
  color: any;
  attribute: any;
  attribute_secondary: any;
  url: string;
  selling_out_of_stock: boolean;
}

export interface Component {
  is_component: boolean;
  product_component_id: number;
  variation_id: number;
  product_component_group_id: any;
  quantity: number;
  default: boolean;
  optional: boolean;
  position: any;
  selected: boolean;
  id: number;
  name: string;
  slug: string;
  payments: any[];
  gtin: string;
  mpn: string;
  additional_shipping_time: any;
  external_id: string;
  category_default_id: number;
  hotsite_id: any;
  description: string;
  short_description: string;
  relevance: number;
  tags: any;
  min_quantity: number;
  max_quantity: any;
  sell_in_kit_only: any;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  kit: any;
  kit_markup: number;
  is_virtual: any;
  is_pre_sale: any;
  images: Image[];
  video: any;
  weight: number;
  depth: number;
  width: number;
  height: number;
  is_gift: any;
  selling_out_of_stock: boolean;
  additional_time_out_of_stock: number;
  price: number;
  price_compare: number;
  discount: number;
  has_price_range: any;
  min_price_range: number;
  max_price_range: number;
  billet_discount: any;
  payments_reason: any;
  brand: Brand;
  category: Category;
  categories: Category[];
  color: any;
  color_id: any;
  attribute: any[];
  attribute_secondary: any[];
  features: Feature[];
  components: any[];
  component_groups: any[];
  colors: any;
  url: string;
  balance: number;
  variations: Variation[];
  variation: Variation;
  image: Image;
  grid_id: number;
  created_at: string;
}

export interface ModalImage {
  src: any;
}

export interface FontMenu {
  family: string;
  category: string;
  variants: string[];
  font_weight: string;
  font_size: string;
  font_style: string;
  letter_spacing: number;
  text_transform: string;
}

export interface FontH1 {
  family: string;
  category: string;
  variants: string[];
  font_weight: string;
  font_size: string;
  font_style: string;
  letter_spacing: string;
  text_transform: string;
}

export interface FontH2 {
  family: string;
  category: string;
  variants: string[];
  font_weight: string;
  font_size: string;
  font_style: string;
  letter_spacing: string;
  text_transform: string;
}

export interface FontH3 {
  family: string;
  category: string;
  variants: string[];
  font_weight: string;
  font_size: string;
  font_style: string;
  letter_spacing: string;
  text_transform: string;
}

export interface FontTexts {
  family: string;
  category: string;
  variants: string[];
  font_weight: string;
  font_size: string;
  font_style: string;
  letter_spacing: string;
  text_transform: string;
}

export interface Favicon {
  src: string;
}

export interface ImgShare {
  src: string;
}

export interface StaticLogo {
  src: string;
}

export interface StaticLogoDark {
  src: string;
}

export interface StaticBannerLogo {
  src: string;
}

export interface Settings {
  lgpd_disable: boolean;
  lgpd_background: string;
  lgpd_text_color: string;
  lgpd_button_background: string;
  lgpd_button_text_color: string;
  lgpd_text: string;
  lgpd_button_text: string;
  lgpd_button_url: string;
  terms_of_acceptance: boolean;
  terms_of_acceptance_title: string;
  terms_of_acceptance_text: string;
  terms_of_acceptance_button: string;
  modal_disable: boolean;
  modal_image: ModalImage;
  modal_type: string;
  modal_time: string;
  modal_title: any;
  modal_message: any;
  modal_button: any;
  modal_button_url: any;
  modal_button_url_target: boolean;
  opening_hours: boolean;
  schedule_monday: boolean;
  schedule_tuesday: boolean;
  schedule_wednesday: boolean;
  schedule_thursday: boolean;
  schedule_friday: boolean;
  schedule_saturday: boolean;
  schedule_sunday: boolean;
  daytime_of: any;
  daytime_for: any;
  nightly_of: any;
  nightly_for: any;
  store_background_image: any;
  store_background_color: string;
  store_background_position: string;
  store_background_size: string;
  product_image_crop: string;
  remove_product_image_background: boolean;
  product_card_custom_crop: any;
  product_info_custom_crop: string;
  product_info_custom_crop_zoom: any;
  product_info_custom_crop_mobile: any;
  product_info_custom_crop_zoom_mobile: any;
  font_menu: FontMenu;
  font_h1: FontH1;
  font_h2: FontH2;
  font_h3: FontH3;
  font_texts: FontTexts;
  font_family_mn: string;
  mn_fs: number;
  mn_fw: string;
  mn_ls: number;
  mn_tt: string;
  font_family_h1: string;
  h1_fs: number;
  h1_fw: string;
  h1_ls: number;
  h1_tt: string;
  font_family_h2: string;
  h2_fs: number;
  h2_fw: string;
  h2_ls: number;
  h2_tt: string;
  font_family_h3: string;
  h3_fs: number;
  h3_fw: string;
  h3_ls: number;
  h3_tt: string;
  font_family_tx: string;
  tx_fs: number;
  tx_fw: string;
  tx_ls: number;
  tx_tt: string;
  color_primary: string;
  color_secondary: string;
  color_border: string;
  color_highlight: string;
  color_button_buy: string;
  color_button_buy_text: string;
  color_text: string;
  radius_size: string;
  product_color_group: string;
  product_buy_button_type: string;
  product_cart_add_redirect: string;
  product_buy_button_text: string;
  product_buy_button_outofstock_text: string;
  product_image_hover: boolean;
  product_color_name: boolean;
  show_product_price_without_stock: boolean;
  product_price_type: string;
  price_feature: string;
  price_parcel: string;
  customize_position_customize: string;
  seal_promotion: boolean;
  seal_promotion_billet_discount: boolean;
  seal_promotion_type: string;
  seal_promotion_fontsize: string;
  seal_promotion_fontcolor: string;
  seal_promotion_background: string;
  seal_launch: boolean;
  seal_launch_time: number;
  seal_launch_fontsize: string;
  seal_launch_fontcolor: any;
  seal_launch_background: string;
  seal_group_discount: boolean;
  seal_group_discount_mobile: boolean;
  seal_group_fontcolor: any;
  seal_group_background: any;
  seal_pre_sale: boolean;
  seal_pre_sale_fontsize: string;
  seal_pre_sale_fontcolor: any;
  seal_pre_sale_background: any;
  custom_style_css: string;
  favicon: Favicon;
  img_share: ImgShare;
  hide_header_social_icons: boolean;
  hide_footer_social_icons: boolean;
  social_facebook_link: string;
  social_twitter_link: any;
  social_instagram_link: string;
  social_pinterest_link: any;
  social_youtube_link: any;
  social_linkedin_link: any;
  social_telegram_link: any;
  social_tiktok_link: any;
  static_logo: StaticLogo;
  static_logo_dark: StaticLogoDark;
  static_logo_height: string;
  static_logo_height_mobile: string;
  show_product_reference: boolean;
  show_product_seals: boolean;
  static_banner_logo: StaticBannerLogo;
  static_banner_url: any;
  banner_blank: boolean;
  static_color_primary_new: string;
  static_color_secondary_new: string;
  static_color_text_new: string;
  static_color_button_bg: string;
  static_color_button_text: string;
  contact_phone: any;
  contact_whatsapp: string;
  contact_skype: any;
  contact_email: any;
  contact_schedule: string;
  static_custom_style_css_new: string;
  shipping_message: boolean;
  shipping_whatsapp: string;
  show_group_discount_message: boolean;
  google_recaptcha: boolean;
}

export interface Theme {
  settings: Settings;
}

export interface General {
  status: string;
  payment_method: string;
  billet: string;
  creditcard: string;
  creditcard_two: string;
  paypal: string;
  marketplace: string;
  manual: string;
  origin: string;
  mobile: string;
  desktop: string;
  panel: string;
  shipping_restriction_message: string;
}

export interface Account {
  name_required_field: string;
  name_fullname_field: string;
  email_required_field: string;
  email_email_field: string;
  email_customer_exists: string;
  cgc_required_field: string;
  cgc_cgc_field: string;
  cgc_customer_exists: string;
  cgc_cpf_field: string;
  birthday_date_field: string;
  phone_required_field: string;
  phone_phone_field: string;
  cgc_cnpj_field: string;
  company_required_field: string;
  ie_required_field: string;
  password_min_length_field: string;
  password_customer_wrong_password: string;
  password_password_doesnt_match: string;
  invalid_pwd_reset_token: string;
}

export interface Checkout {
  invalid_zipcode: string;
  item_out_of_stock: string;
  item_quantity_gt_stock: string;
  item_min_quantity_gt_stock: string;
  item_min_quantity_gt_quantity: string;
  item_max_quantity_lt_quantity: string;
  item_product_sell_in_kit_only: string;
  not_found_allow_items_discount: string;
  invalid_coupon: string;
  coupon_not_yet_valid: string;
  coupon_invalid_user: string;
  coupon_invalid_brand: string;
  coupon_already_used: string;
  coupon_min_quantity_required: string;
  coupon_min_purchase_required: string;
  coupon_expired: string;
  coupon_usage_limit: string;
  coupon_not_allow_free_freight: string;
  prerequisite_quantity_not_reached: string;
  order_invalid_min_quantity: string;
  order_min_quantity: string;
  order_invalid_min_purchase: string;
  order_min_purchase: string;
  order_invalid_items: string;
  order_invalid_out_of_stock: string;
  order_total_inconsistent: string;
  order_invalid_shipping: string;
  order_invalid_payment: string;
  invalid_card_number: string;
  invalid_card_date: string;
  invalid_card_cvv: string;
  invalid_card_brand: string;
  invalid_card_data: string;
  invalid_card_holder_name: string;
  invalid_card_holder_cgc: string;
  invalid_card_holder_birthday: string;
  card_expired: string;
  without_sufficient_limit: string;
  invalid_card_installments: string;
  invalid_payment_amount: string;
  card_max_attempts: string;
  unauthorized_card: string;
  disabled_card: string;
  highrisk_card: string;
  blacklist_card: string;
  payment_expired: string;
  payment_denied: string;
  cant_process: string;
  cant_process_try_again: string;
  undefined_error: string;
  already_paid: string;
  internal_server_error: string;
  invalid_email: string;
}

export interface Order {
  open: string;
  archived: string;
  canceled: string;
  status_payment: string;
  pending: string;
  approved: string;
  denied: string;
  expired: string;
  refunded: string;
  chargeback: string;
  status_fulfillment: string;
  unfulfilled: string;
  attended: string;
  invoiced: string;
  shipped: string;
  delivered: string;
  production: string;
}

export interface Translate {
  general: General;
  account: Account;
  checkout: Checkout;
  order: Order;
}

export interface Trackers {
  rdstation: any;
  gtm: any;
  gtag: any;
  fb: any;
}

interface ShopConfig {
  shop_id: number;
  customer: any[];
  cart: any[];
  product: Product;
  base_url: string;
  url: string;
  template: string;
  cdn_url: string;
  assets_url: string;
  theme_url: string;
  theme_assets_url: string;
  theme: Theme;
  page_title: string;
  is_mobile: number;
  translate: Translate;
  trackers: Trackers;
  services: any;
  environment: string;
}

declare global {
  interface Window {
    dooca: ShopConfig;
    grecaptcha?: any;
    onRecaptchaLoad?: () => void;
  }
}
