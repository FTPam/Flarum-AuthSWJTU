<?php

/*
 * This file is part of tpam/flarum-jdidverify.
 *
 * Copyright (c) 2021 tpam.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace TPam\FlarumJDIDVerify;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings)
        ->serializeToForum('isIDVerifyEnabled', 'tpam/flarum-jdidverify.isEnable',null,'false')
        //->serializeToForum('myCoolSettingModified', 'my.cool.setting.key', function ($retrievedValue) {
            // This third argument is optional, and allows us to pass the retrieved setting through some custom logic.
            // In this example, we'll append a string to it.

        //    return "My Cool Setting: $retrievedValue";
       // }, "default value!"),
];
