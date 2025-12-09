import { Helmet } from 'react-helmet-async';

const defaultMeta = {
    title: 'Afif Syahmi',
    description: 'Portfolio of Afif Syahmi - First Class Honours graduate in Applied Biology with expertise in Halal Science, Molecular Biology, and Research Innovation. Available for hire.',
    image: '/og-image.jpeg',
    url: 'https://portfolio-afif-syahmi.vercel.app'
};

export default function SEO({
    title,
    description = defaultMeta.description,
    image = defaultMeta.image,
    url,
    type = 'website',
    keywords = 'Afif Syahmi, Applied Biology, Halal Science, Molecular Biology, Portfolio, Malaysia, Research, Biologist, Universiti Malaya'
}) {
    const fullTitle = title ? `${title} | ${defaultMeta.title}` : `${defaultMeta.title} | Applied Biology & Halal Science`;
    const fullUrl = url ? `${defaultMeta.url}${url}` : defaultMeta.url;
    const fullImage = image.startsWith('http') ? image : `${defaultMeta.url}${image}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Afif Syahmi" />
            <meta name="robots" content="index, follow" />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:alt" content={`${defaultMeta.title} Portfolio`} />
            <meta property="og:site_name" content={defaultMeta.title} />
            <meta property="og:locale" content="en_MY" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Additional SEO Tags */}
            <meta name="theme-color" content="#3B82F6" />
            <meta name="msapplication-TileColor" content="#3B82F6" />
        </Helmet>
    );
}
