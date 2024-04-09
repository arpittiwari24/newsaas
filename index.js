#! /usr/bin/env node

import { program } from 'commander'
import installNew from './commands/installNew.js'

program
       .command('create')
       .description('scaffold a new project using the boilerplate')
       .action(installNew)

program.parse()