#!/bin/sh

cat <<EOF > /app/public/env.js
window.__ENV__ = {
  NEXT_PUBLIC_API_URL: "${NEXT_PUBLIC_API_URL}"
};

console.log('NEXT_PUBLIC_API_URL:', window.__ENV__.NEXT_PUBLIC_API_URL);
EOF

echo "Injecting NEXT_PUBLIC_API_URL: ${NEXT_PUBLIC_API_URL}"

exec "$@"
