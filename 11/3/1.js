promise.then(f1).catch(f2); // f1 может вернуть промис который выполнится с ошибкой,
                            // и тогда выполнится f2

promise.then(f1, f2);    // Выполнится либо f1 в случае resolve либо f2 в случае reject