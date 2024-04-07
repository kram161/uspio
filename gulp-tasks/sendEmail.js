"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("sendEmail", () => {
    return gulp.src(paths.sendEmail.src)
        .pipe(gulp.dest(paths.sendEmail.dist))
        .pipe(debug({
            "title": "sendEmail"
        }));
});