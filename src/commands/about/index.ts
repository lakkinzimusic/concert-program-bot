import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, name, version } from '../../../package.json';

const debug = createDebug('bot:about_command');

const about = () => (ctx: Context) => {
  const message = `*${name} ${version}*\n${author}\n`;
  debug(`Triggered "about" command with message \n${message}`);

  return ctx.replyWithMarkdown(message);
};

export default about;
