/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
 ignoreDuringBuilds: true,
};

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
export default withNextIntl({ nextConfig });
