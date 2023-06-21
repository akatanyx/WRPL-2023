export interface User {
  _id: string;
  nama: string;
  email: string;
  nomor_hp: string;
  imgURL: string;
  password: string;
  alamat: string;
  roles: string[];
  // Include other fields as needed
}
export interface Merchant {
  _id: string;
  id_user: string;
  nama_resto: string;
  alamat_resto: string;
  deskripsi_resto: string;
  imgURL_resto: string;
  nomor_ktp_merchant: string;
  email_merchant: string;
  jam_buka: string;
  jam_tutup: string;
  rating_resto: number;
  menus: string[];
}

export interface Wallet {
  _id: string;
  id_user: string;
  nomor_wallet: string;
  saldo: number;
}

export interface Menu {
  _id: string;
  nama_menu: string;
  harga_menu: number;
  desk: string;
  tag: string[];
  kategori: string;
  rating_menu: number;
  imgURL_menu: string;
}

export interface Driver {
  _id: string;
  nomor_stnk: string;
  nomor_sim: string;
  nomor_plat: string;
  jenis_motor: string;
  imgURL_driver: string;
}
export interface Cart {
  _id: string;
  id_user: string;
  id_menu: string;
  jumlah: number;  
}

export interface CartItem {
  _id: string;
  id_user: string;
  id_menu: string;
  jumlah: number;
  menuItems: Menu;
}

export interface Order {
  _id: string;
  id_user: string;
  id_cart: string;
  tanggal: Date;
  status: string;
  total_harga: number;
  alamat: string;
}

export type CardKategoriProps = {
  id: string;
  namaKategori: string;
  gambarKategori: string;
};

export type CardBestRestoProps = {
  id: string;
  namaResto: string;
  gambarResto: string;
};

export type CardRestoNearProps = {
  item: CardRestoNear;
};
export interface CardRestoNear {
  id: string;
  namaResto: string;
  gambarResto: string;
  alamatResto: string;
  jarakResto: string;
  ratingResto: string;
}

export type CardFavoritFoodProps = {
  id: string;
  namaFood: string;
  gambarFood: string;
  resto: string;
  hargaFood: string;
  kategoriFood: string;
  ratingFood: string;
};