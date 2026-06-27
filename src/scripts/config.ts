interface ImageEntry {
  src: string;
  fullSrc?: string;
  alt: string;
}

export const IMAGES: {
  hero: ImageEntry;
  gallery: ImageEntry[];
} = {
  hero: {
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    alt: 'Млад шофьор зад волана на автомобил',
  },
  gallery: [
    { src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600', fullSrc: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200', alt: 'Шофиране' },
    { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600', fullSrc: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200', alt: 'Млад шофьор' },
    { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600', fullSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200', alt: 'Автомобил' },
    { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600', fullSrc: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200', alt: 'Спортен автомобил' },
    { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600', fullSrc: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200', alt: 'Интериор на автомобил' },
    { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600', fullSrc: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200', alt: 'Пътуване' },
    { src: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600', fullSrc: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=1200', alt: 'Шофьорски изпит' },
    { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600', fullSrc: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200', alt: 'Автомобил отстрани' },
  ],
};
