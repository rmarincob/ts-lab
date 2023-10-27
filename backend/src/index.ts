
import "dotenv/config";
import app from './server';

const { PORT } = process.env

async function main() {
    /* Server Listen */
    app.listen(Number(PORT), '0.0.0.0', () => {
        console.log(`⚡️ Server started on port ${Number(PORT)}`);
    });
}

main()