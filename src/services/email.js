const domain = "konradvofely.hu";
const to = `info@${domain}`;
const from = to;
const subject = `Üzenet a ${domain}-ról`;

function _sendMail({ from, to, subject, html }) {
    return fetch(`${process.env.GATSBY_CHERAMI_URL}/api/v1/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from,
            to,
            subject,
            html,
        })
    })
}

function bodyHtml({ fullName, email }, message) {
    return `<h1>&Uuml;zenet a <a href="https://${domain}">${domain}</a>-r&oacute;l</h1>
    <p>${message}</p>
    <p><strong><em>${fullName}</em></strong><br /><a href="mailto:${email}"><em>${email}</em></a></p>
    <p>A <a href="https://${domain}">${domain}</a> oldalt <a href="mailto:benjamin.ferge@protonmail.com">Ferge Benj&aacute;min</a> &uuml;zemelteti.</p>`;
}

export function sendMail(sender, message) {
    return _sendMail({
        from,
        to,
        subject,
        html: bodyHtml(sender, message),
    });
}
