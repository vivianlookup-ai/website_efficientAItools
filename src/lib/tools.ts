export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  iconBg: string;
  category: string;
  tags: string[];
  price: 'free' | 'freemium' | 'paid';
  badge?: 'free' | 'premium' | 'new';
  featured?: boolean;
  url: string;
  uses: number;
  features: string[];
  howToUse: string[];
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Record<string, Category> = {
  pdf: {
    slug: 'pdf',
    name: 'PDF Tools',
    icon: '📄',
    description: 'Merge, split, compress, and convert PDF files — no upload needed.',
  },
  word: {
    slug: 'word',
    name: 'Word Documents',
    icon: '📝',
    description: 'Convert, edit, and generate Word documents (.docx) right in your browser.',
  },
  download: {
    slug: 'download',
    name: 'Download Tools',
    icon: '⬇️',
    description: 'Download videos, music, and files from the web at maximum speed.',
  },
  converter: {
    slug: 'converter',
    name: 'Converters',
    icon: '🔄',
    description: 'Convert between formats — images, documents, audio, and more.',
  },
  text: {
    slug: 'text',
    name: 'Text Tools',
    icon: '✏️',
    description: 'Count words, diff text, format JSON, and other text utilities.',
  },
  image: {
    slug: 'image',
    name: 'Image Tools',
    icon: '🖼️',
    description: 'Resize, crop, compress, and convert images in your browser.',
  },
  worksheets: {
    slug: 'worksheets',
    name: 'Math Worksheets',
    icon: '🧮',
    description: 'Free printable K-5 math worksheets generated on demand.',
  },
};

export const tools: Tool[] = [
  {
    slug: 'pdf-merger',
    name: 'PDF Merger',
    tagline: 'Combine multiple PDFs into one document instantly',
    description: 'A lightning-fast, browser-based PDF merger that lets you combine multiple PDF files into a single document. All processing happens locally in your browser — nothing is ever uploaded to a server. Drag and drop your PDFs, reorder them, and merge with one click.',
    icon: '📄',
    iconBg: '#1a1a3e',
    category: 'pdf',
    tags: ['merge', 'combine', 'free'],
    price: 'free',
    badge: 'free',
    featured: true,
    url: '/tool/pdf-merger/',
    uses: 12840,
    features: [
      'Merge unlimited PDF files at once',
      'Drag-and-drop reordering',
      '100% local processing — files never leave your device',
      'No file size limits',
      'High-quality output preservation',
      'Works offline',
    ],
    howToUse: [
      'Click the upload area or drag PDF files into it',
      'Drag files to reorder them in your preferred sequence',
      'Click "Merge PDFs" and wait a few seconds',
      'Download your merged PDF file',
    ],
  },
  {
    slug: 'pdf-splitter',
    name: 'PDF Splitter',
    tagline: 'Split a PDF into separate pages or sections',
    description: 'Extract specific pages or split a large PDF into multiple smaller files. Choose by page range or extract every page as a separate PDF. Perfect for breaking up large documents, extracting chapters, or saving only the pages you need.',
    icon: '✂️',
    iconBg: '#1a2e1a',
    category: 'pdf',
    tags: ['split', 'extract', 'pages'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/pdf-splitter/',
    uses: 8560,
    features: [
      'Split by page range or extract all pages individually',
      'Preview pages before splitting',
      'Local processing for privacy',
      'Supports large PDFs',
    ],
    howToUse: [
      'Upload your PDF file',
      'Choose split mode: by range or extract all',
      'Customize your selection',
      'Download the split PDFs as a ZIP',
    ],
  },
  {
    slug: 'pdf-compressor',
    name: 'PDF Compressor',
    tagline: 'Reduce PDF file size without losing quality',
    description: 'Compress PDF files to reduce their size while maintaining excellent visual quality. Choose between maximum compression for smallest file size or balanced mode for the best quality-to-size ratio. All processing is done locally.',
    icon: '🗜️',
    iconBg: '#2e1a1a',
    category: 'pdf',
    tags: ['compress', 'reduce', 'optimize'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/pdf-compressor/',
    uses: 6720,
    features: [
      'Up to 80% file size reduction',
      'Multiple compression levels',
      'Preserve text and vector quality',
      'Batch compression support',
    ],
    howToUse: [
      'Upload your PDF',
      'Select compression level (light, balanced, maximum)',
      'Click "Compress"',
      'Download the optimized file',
    ],
  },
  {
    slug: 'word-to-pdf',
    name: 'Word to PDF',
    tagline: 'Convert .docx files to PDF in seconds',
    description: 'Convert Microsoft Word documents (.docx) to PDF format with perfect formatting preservation. Supports headers, footers, tables, images, and complex layouts. No upload required — everything runs in your browser.',
    icon: '📝',
    iconBg: '#1a2e3e',
    category: 'word',
    tags: ['convert', 'docx', 'document'],
    price: 'free',
    badge: 'free',
    featured: true,
    url: '/tool/word-to-pdf/',
    uses: 15320,
    features: [
      'Preserves fonts, formatting, and layout',
      'Handles complex tables and images',
      'Supports headers, footers, and page numbers',
      'Batch conversion available',
      'No file size limit',
    ],
    howToUse: [
      'Upload your .docx file',
      'Optionally adjust conversion settings',
      'Click "Convert to PDF"',
      'Download your PDF',
    ],
  },
  {
    slug: 'pdf-to-word',
    name: 'PDF to Word',
    tagline: 'Convert PDF back to editable Word documents',
    description: 'Convert PDF files into editable Microsoft Word documents (.docx). Advanced OCR and layout recognition ensure your text, tables, and formatting are preserved accurately.',
    icon: '📋',
    iconBg: '#2e1a3e',
    category: 'word',
    tags: ['convert', 'pdf', 'editable'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/pdf-to-word/',
    uses: 9840,
    features: [
      'Accurate layout and text recognition',
      'Table preservation',
      'Image extraction',
      'Simple one-click conversion',
    ],
    howToUse: [
      'Upload your PDF file',
      'Click "Convert to Word"',
      'Download the editable .docx file',
    ],
  },
  {
    slug: 'youtube-downloader',
    name: 'YouTube Downloader',
    tagline: 'Download YouTube videos in any quality',
    description: 'Download YouTube videos in MP4 or MP3 format. Choose from multiple quality options from 144p to 4K. Paste a link and download instantly — no sign-up, no ads, no limits.',
    icon: '🎬',
    iconBg: '#3e1a1a',
    category: 'download',
    tags: ['video', 'youtube', 'mp4', 'mp3'],
    price: 'free',
    badge: 'free',
    featured: true,
    url: '/tool/youtube-downloader/',
    uses: 25600,
    features: [
      'Download up to 4K resolution',
      'MP4 and MP3 formats',
      'Playlist support',
      'Subtitle download',
      'Fast download speeds',
    ],
    howToUse: [
      'Copy the YouTube video URL',
      'Paste it into the input field',
      'Select quality and format',
      'Click "Download"',
    ],
  },
  {
    slug: 'tiktok-downloader',
    name: 'TikTok Downloader',
    tagline: 'Download TikTok videos without watermark',
    description: 'Download any TikTok video without the watermark. Works with public TikTok videos, Reels, and stories. Simply paste the link and get a clean, watermark-free video file.',
    icon: '📱',
    iconBg: '#1a1a2e',
    category: 'download',
    tags: ['tiktok', 'video', 'no-watermark'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/tiktok-downloader/',
    uses: 18900,
    features: [
      'No watermark output',
      'High quality preservation',
      'Works with private accounts (public videos)',
      'Fast processing',
    ],
    howToUse: [
      'Copy the TikTok video link',
      'Paste it into the input field',
      'Click "Get Video"',
      'Download the clean video',
    ],
  },
  {
    slug: 'image-to-png',
    name: 'Image to PNG',
    tagline: 'Convert any image to PNG format',
    description: 'Convert images from JPG, WebP, BMP, GIF, SVG, and other formats to PNG instantly. Supports batch conversion and transparent background preservation.',
    icon: '🖼️',
    iconBg: '#1a3e2e',
    category: 'converter',
    tags: ['image', 'convert', 'png'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/image-to-png/',
    uses: 11200,
    features: [
      'Supports JPG, WebP, BMP, GIF, SVG input',
      'Preserves transparency',
      'Batch convert up to 20 images',
      'No upload — local processing',
    ],
    howToUse: [
      'Upload or drag images',
      'Choose output format (PNG)',
      'Click "Convert"',
      'Download individual files or ZIP',
    ],
  },
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    tagline: 'Compress images for web without quality loss',
    description: 'Reduce image file sizes for faster web loading. Smart compression preserves visual quality while dramatically reducing file size. Supports JPG, PNG, WebP, and AVIF formats.',
    icon: '📦',
    iconBg: '#2e2e1a',
    category: 'image',
    tags: ['compress', 'optimize', 'web'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/image-compressor/',
    uses: 7400,
    features: [
      'Up to 90% size reduction',
      'Visual quality preview',
      'Batch processing',
      'WebP and AVIF output',
    ],
    howToUse: [
      'Upload images',
      'Adjust quality slider',
      'Preview before and after',
      'Download compressed files',
    ],
  },
  {
    slug: 'word-counter',
    name: 'Word Counter',
    tagline: 'Count words, characters, and reading time',
    description: 'A clean, distraction-free word counter that shows character count, word count, sentence count, paragraph count, and estimated reading time. Great for writers, students, and content creators.',
    icon: '📊',
    iconBg: '#1a1a2e',
    category: 'text',
    tags: ['writing', 'count', 'statistics'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/word-counter/',
    uses: 9200,
    features: [
      'Real-time word and character counting',
      'Reading time estimation',
      'Keyword density analysis',
      'Copy results to clipboard',
    ],
    howToUse: [
      'Start typing or paste your text',
      'View real-time statistics',
      'Use the copy button to export results',
    ],
  },
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    tagline: 'Format, validate, and minify JSON data',
    description: 'Format and validate JSON data with syntax highlighting, tree view, and error detection. Perfect for developers debugging APIs or working with configuration files.',
    icon: '{ }',
    iconBg: '#2e1a2e',
    category: 'text',
    tags: ['developer', 'format', 'validate'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/json-formatter/',
    uses: 6100,
    features: [
      'Pretty-print and minify',
      'Syntax error detection with line numbers',
      'Tree view and raw view',
      'Copy with one click',
    ],
    howToUse: [
      'Paste your JSON data',
      'Click "Format" or "Minify"',
      'View errors highlighted in red',
      'Copy the result',
    ],
  },
  {
    slug: 'text-diff',
    name: 'Text Diff Checker',
    tagline: 'Compare two texts and find the differences',
    description: 'Compare two texts side by side and instantly see what changed. Great for code review, document comparison, or checking revisions. Highlights added, removed, and modified lines.',
    icon: '🔍',
    iconBg: '#1a2e2e',
    category: 'text',
    tags: ['compare', 'diff', 'review'],
    price: 'free',
    badge: 'free',
    featured: false,
    url: '/tool/text-diff/',
    uses: 4900,
    features: [
      'Side-by-side comparison view',
      'Color-coded differences',
      'Inline word-level diffing',
      'Line numbers for reference',
    ],
    howToUse: [
      'Paste the original text on the left',
      'Paste the modified text on the right',
      'Click "Compare"',
      'Review highlighted differences',
    ],
  },
  {
    slug: 'math-worksheets',
    name: 'Math Worksheet Generator',
    tagline: 'Free printable K-5 math worksheets',
    description: 'Generate and print custom math worksheets for Kindergarten through Grade 5. Covers addition, subtraction, multiplication, division, fractions, decimals, and more. Answer keys included for premium users.',
    icon: '🧮',
    iconBg: '#1a1a3e',
    category: 'worksheets',
    tags: ['education', 'math', 'printable', 'pdf'],
    price: 'freemium',
    badge: 'free',
    featured: true,
    url: '/grade/k/',
    uses: 45000,
    features: [
      'K-5 grade levels with Common Core alignment',
      'Multi-topic coverage (addition, fractions, etc.)',
      'Free worksheets for every topic',
      'Premium: all difficulty levels + answer keys',
      'Instant PDF download, printer-friendly',
    ],
    howToUse: [
      'Select your child\'s grade level',
      'Choose a math topic',
      'Pick difficulty level',
      'Download and print the PDF',
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getFeatured(): Tool[] {
  return tools.filter((t) => t.featured);
}
