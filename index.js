//import { Resend } from 'resend';
const { Resend } = require('resend');

const resend = new Resend('re_RvEW94Wu_A2QyzErBiS62Mhft2Xbth2FU');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jefersson.arevalo@decimetrix.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
