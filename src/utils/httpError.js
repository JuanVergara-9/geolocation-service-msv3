class HttpError extends Error { constructor(status, code, message){ super(message); this.status=status; this.code=code; } }
const notFound=(c,m)=>new HttpError(404,c,m);
module.exports={ HttpError, notFound };
