// Copy and paste the validateToken function from above here

import { TURNSTILEKEY } from '$env/static/private';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const token = data.get('cf-turnstile-response'); // if you edited the formsField option change this
        const SECRET_KEY = TURNSTILEKEY;

        const { success, error } = await validateToken(token, SECRET_KEY);

        if (!success)
            return {
                error: error || 'Invalid CAPTCHA',
            };

        // do something, the captcha is valid!
    },
};