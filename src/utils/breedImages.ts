// Real high-resolution dog breed photography mapped to each of the 121 breeds
// Sourced from verified Dog CEO API / Unsplash / AKC breed database
export const breedPhotoMap: Record<string, string> = {
  "airedale-terrier": "/images/breeds/airedale-terrier.webp",
  "akita-inu": "/images/breeds/akita-inu.webp",
  "alaskan-malamute": "/images/breeds/alaskan-malamute.webp",
  "american-pit-bull-terrier": "/images/breeds/american-pit-bull-terrier.webp",
  "american-staffordshire-terrier": "/images/breeds/american-staffordshire-terrier.webp",
  "australian-cattle-dog": "/images/breeds/australian-cattle-dog.webp",
  "azawakh": "/images/breeds/azawakh.webp",
  "barbet": "/images/breeds/barbet.webp",
  "basenji": "/images/breeds/basenji.webp",
  "basset-hound": "/images/breeds/basset-hound.webp",
  "beagle": "/images/breeds/beagle.webp",
  "border-collie": "/images/breeds/border-collie.webp",
  "boxer": "/images/breeds/boxer.webp",
  "boyero-de-berna": "/images/breeds/boyero-de-berna.webp",
  "bulldog-frances": "/images/breeds/bulldog-frances.webp",
  "cane-corso": "/images/breeds/cane-corso.webp",
  "chihuahua": "/images/breeds/chihuahua.webp",
  "chow-chow": "/images/breeds/chow-chow.webp",
  "cocker-spaniel-ingles": "/images/breeds/cocker-spaniel-ingles.webp",
  "dachshund": "/images/breeds/dachshund.webp",
  "dalmata": "/images/breeds/dalmata.webp",
  "doberman": "/images/breeds/doberman.webp",
  "dogo-argentino": "/images/breeds/dogo-argentino.webp",
  "german-pinscher": "/images/breeds/german-pinscher.webp",
  "pinscher-miniatura": "/images/breeds/pinscher-miniatura.webp",
  "golden-retriever": "/images/breeds/golden-retriever.webp",
  "gran-danes": "/images/breeds/gran-danes.webp",
  "jack-russell-terrier": "/images/breeds/jack-russell-terrier.webp",
  "labrador-retriever": "/images/breeds/labrador-retriever.webp",
  "pastor-aleman": "/images/breeds/pastor-aleman.webp",
  "pomerania": "/images/breeds/pomerania.webp",
  "poodle": "/images/breeds/poodle.webp",
  "pug-carlino": "/images/breeds/pug-carlino.webp",
  "rottweiler": "/images/breeds/rottweiler.webp",
  "samoyedo": "/images/breeds/samoyedo.webp",
  "shiba-inu": "/images/breeds/shiba-inu.webp",
  "siberian-husky": "/images/breeds/siberian-husky.webp",
  "vizsla": "/images/breeds/vizsla.webp",
  "weimaraner": "/images/breeds/weimaraner.webp",
  "xoloitzcuintle": "/images/breeds/xoloitzcuintle.webp",
  "pastor-australiano": "/images/breeds/pastor-australiano.webp",
  "belgian-malinois": "/images/breeds/belgian-malinois.webp",
  "corgi-pembroke": "/images/breeds/corgi-pembroke.webp",
  "pastor-de-shetland": "/images/breeds/pastor-de-shetland.webp",
  "pastor-blanco-suizo": "/images/breeds/pastor-blanco-suizo.webp",
  "beauceron": "/images/breeds/beauceron.webp",
  "bouvier-des-flandres": "/images/breeds/bouvier-des-flandres.webp",
  "pastor-holandes": "/images/breeds/pastor-holandes.webp",
  "komondor": "/images/breeds/komondor.webp",
  "corgi-cardigan": "/images/breeds/corgi-cardigan.webp",
  "san-bernardo": "/images/breeds/san-bernardo.webp",
  "mastin-espanol": "/images/breeds/mastin-espanol.webp",
  "mastin-napolitano": "/images/breeds/mastin-napolitano.webp",
  "bullmastiff": "/images/breeds/bullmastiff.webp",
  "schnauzer-gigante": "/images/breeds/schnauzer-gigante.webp",
  "schnauzer-miniatura": "/images/breeds/schnauzer-miniatura.webp",
  "dogo-de-burdeos": "/images/breeds/dogo-de-burdeos.webp",
  "terranova": "/images/breeds/terranova.webp",
  "shar-pei": "/images/breeds/shar-pei.webp",
  "presa-canario": "/images/breeds/presa-canario.webp",
  "bull-terrier": "/images/breeds/bull-terrier.webp",
  "staffordshire-bull-terrier": "/images/breeds/staffordshire-bull-terrier.webp",
  "west-highland-white-terrier": "/images/breeds/west-highland-white-terrier.webp",
  "yorkshire-terrier": "/images/breeds/yorkshire-terrier.webp",
  "scottish-terrier": "/images/breeds/scottish-terrier.webp",
  "dachshund-pelo-duro": "/images/breeds/dachshund-pelo-duro.webp",
  "dachshund-pelo-largo": "/images/breeds/dachshund-pelo-largo.webp",
  "akita-americano": "/images/breeds/akita-americano.webp",
  "podenco-ibicenco": "/images/breeds/podenco-ibicenco.webp",
  "podenco-canario": "/images/breeds/podenco-canario.webp",
  "bloodhound": "/images/breeds/bloodhound.webp",
  "rhodesian-ridgeback": "/images/breeds/rhodesian-ridgeback.webp",
  "pointer-ingles": "/images/breeds/pointer-ingles.webp",
  "setter-ingles": "/images/breeds/setter-ingles.webp",
  "setter-irlandes": "/images/breeds/setter-irlandes.webp",
  "epagneul-breton": "/images/breeds/epagneul-breton.webp",
  "perro-de-agua-espanol": "/images/breeds/perro-de-agua-espanol.webp",
  "perro-de-agua-portugues": "/images/breeds/perro-de-agua-portugues.webp",
  "english-springer-spaniel": "/images/breeds/english-springer-spaniel.webp",
  "bichon-frise": "/images/breeds/bichon-frise.webp",
  "bichon-maltes": "/images/breeds/bichon-maltes.webp",
  "shih-tzu": "/images/breeds/shih-tzu.webp",
  "cavalier-king-charles": "/images/breeds/cavalier-king-charles.webp",
  "papillon": "/images/breeds/papillon.webp",
  "boston-terrier": "/images/breeds/boston-terrier.webp",
  "borzoi": "/images/breeds/borzoi.webp",
  "galgo-espanol": "/images/breeds/galgo-espanol.webp",
  "greyhound": "/images/breeds/greyhound.webp",
  "whippet": "/images/breeds/whippet.webp",
  "afghan-hound": "/images/breeds/afghan-hound.webp",
  "saluki": "/images/breeds/saluki.webp",
  "irish-wolfhound": "/images/breeds/irish-wolfhound.webp",
  "italian-greyhound": "/images/breeds/italian-greyhound.webp",
  "pastor-de-anatolia": "/images/breeds/pastor-de-anatolia.webp",
  "briard": "/images/breeds/briard.webp",
  "pastor-de-los-pirineos": "/images/breeds/pastor-de-los-pirineos.webp",
  "bobtail": "/images/breeds/bobtail.webp",
  "hovawart": "/images/breeds/hovawart.webp",
  "leonberger": "/images/breeds/leonberger.webp",
  "landseer": "/images/breeds/landseer.webp",
  "dogo-de-palma": "/images/breeds/dogo-de-palma.webp",
  "pinscher-mediano": "/images/breeds/pinscher-mediano.webp",
  "kerry-blue-terrier": "/images/breeds/kerry-blue-terrier.webp",
  "bedlington-terrier": "/images/breeds/bedlington-terrier.webp",
  "fox-terrier-pelo-duro": "/images/breeds/fox-terrier-pelo-duro.webp",
  "border-terrier": "/images/breeds/border-terrier.webp",
  "cairn-terrier": "/images/breeds/cairn-terrier.webp",
  "irish-terrier": "/images/breeds/irish-terrier.webp",
  "welsh-terrier": "/images/breeds/welsh-terrier.webp",
  "finnish-spitz": "/images/breeds/finnish-spitz.webp",
  "norwegian-elkhound": "/images/breeds/norwegian-elkhound.webp",
  "kishu-ken": "/images/breeds/kishu-ken.webp",
  "sabueso-espanol": "/images/breeds/sabueso-espanol.webp",
  "basset-leonado": "/images/breeds/basset-leonado.webp",
  "petit-basset": "/images/breeds/petit-basset.webp",
  "setter-gordon": "/images/breeds/setter-gordon.webp",
  "braco-aleman": "/images/breeds/braco-aleman.webp",
  "flat-coated-retriever": "/images/breeds/flat-coated-retriever.webp",
  "tolling-retriever": "/images/breeds/tolling-retriever.webp",
  "lhasa-apso": "/images/breeds/lhasa-apso.webp",
  "pekingese": "/images/breeds/pekingese.webp",
  "chinese-crested": "/images/breeds/chinese-crested.webp"
};

// Fallback high quality dog photos
const fallbackDogPhotos = [
  "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg",
  "https://images.dog.ceo/breeds/germanshepherd/n02106662_16147.jpg",
  "https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg",
  "https://images.dog.ceo/breeds/labrador/n02099712_7418.jpg",
  "https://images.dog.ceo/breeds/husky/n02110185_10047.jpg"
];

/**
 * Returns the exact photograph URL for a given breed ID or Breed object.
 */
export function getBreedImageUrl(breedInput: string | { id: string; imageUrl?: string; breed?: string }): string {
  if (typeof breedInput === "object" && breedInput !== null) {
    if (breedInput.imageUrl) return breedInput.imageUrl;
    if (breedInput.id && breedPhotoMap[breedInput.id]) return breedPhotoMap[breedInput.id];
  }

  const breedId = typeof breedInput === "string" ? breedInput : breedInput?.id;
  if (breedId && breedPhotoMap[breedId]) {
    return breedPhotoMap[breedId];
  }

  // Deterministic fallback based on string hash if ID is not in map
  if (!breedId) return fallbackDogPhotos[0];
  let hash = 0;
  for (let i = 0; i < breedId.length; i++) {
    hash += breedId.charCodeAt(i);
  }
  const index = Math.abs(hash) % fallbackDogPhotos.length;
  return fallbackDogPhotos[index];
}

/**
 * Fetch a fresh, real dog photo dynamically from Dog CEO API based on breed name or slug.
 */
export async function fetchBreedImageFromApi(breedNameOrSlug: string): Promise<string> {
  try {
    const slug = breedNameOrSlug.toLowerCase().replace(/[^a-z]/g, "");
    const res = await fetch(`https://dog.ceo/api/breed/${slug}/images/random`);
    const data = await res.json();
    if (data.status === "success" && data.message) {
      return data.message;
    }
    // Try general random image
    const fallbackRes = await fetch("https://dog.ceo/api/breeds/image/random");
    const fallbackData = await fallbackRes.json();
    if (fallbackData.status === "success" && fallbackData.message) {
      return fallbackData.message;
    }
  } catch (err) {
    console.warn("Could not fetch dynamic breed image:", err);
  }
  return getBreedImageUrl(breedNameOrSlug);
}
