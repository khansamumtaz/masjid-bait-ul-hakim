// Complete Lahore Namaz Timetable
// Columns: fajr, sunrise, zuhr, asr, maghrib, isha
// Format: "HH:MM"

const PRAYER_CALENDAR = {
  // ── JANUARY ──
  "01": [
    null, // index 0 unused
    { fajr:"05:35", zuhr:"12:11", asr:"15:33", maghrib:"17:10", isha:"18:37" }, // 1
    { fajr:"05:36", zuhr:"12:12", asr:"15:34", maghrib:"17:10", isha:"18:38" }, // 2
    { fajr:"05:36", zuhr:"12:12", asr:"15:34", maghrib:"17:11", isha:"18:38" }, // 3
    { fajr:"05:36", zuhr:"12:12", asr:"15:35", maghrib:"17:12", isha:"18:39" }, // 4
    { fajr:"05:36", zuhr:"12:13", asr:"15:36", maghrib:"17:12", isha:"18:39" }, // 5
    { fajr:"05:37", zuhr:"12:13", asr:"15:37", maghrib:"17:13", isha:"18:40" }, // 6
    { fajr:"05:37", zuhr:"12:14", asr:"15:38", maghrib:"17:14", isha:"18:40" }, // 7
    { fajr:"05:37", zuhr:"12:14", asr:"15:38", maghrib:"17:15", isha:"18:41" }, // 8
    { fajr:"05:37", zuhr:"12:15", asr:"15:39", maghrib:"17:15", isha:"18:42" }, // 9
    { fajr:"05:37", zuhr:"12:15", asr:"15:40", maghrib:"17:16", isha:"18:42" }, // 10
    { fajr:"05:37", zuhr:"12:15", asr:"15:41", maghrib:"17:17", isha:"18:42" }, // 11
    { fajr:"05:37", zuhr:"12:15", asr:"15:41", maghrib:"17:18", isha:"18:42" }, // 12
    { fajr:"05:37", zuhr:"12:16", asr:"15:42", maghrib:"17:19", isha:"18:43" }, // 13
    { fajr:"05:37", zuhr:"12:16", asr:"15:43", maghrib:"17:20", isha:"18:45" }, // 14
    { fajr:"05:37", zuhr:"12:16", asr:"15:43", maghrib:"17:21", isha:"18:45" }, // 15
    { fajr:"05:37", zuhr:"12:17", asr:"15:44", maghrib:"17:21", isha:"18:46" }, // 16
    { fajr:"05:37", zuhr:"12:17", asr:"15:45", maghrib:"17:22", isha:"18:47" }, // 17
    { fajr:"05:37", zuhr:"12:17", asr:"15:46", maghrib:"17:23", isha:"18:48" }, // 18
    { fajr:"05:37", zuhr:"12:18", asr:"15:47", maghrib:"17:24", isha:"18:49" }, // 19
    { fajr:"05:37", zuhr:"12:18", asr:"15:48", maghrib:"17:25", isha:"18:50" }, // 20
    { fajr:"05:37", zuhr:"12:19", asr:"15:49", maghrib:"17:26", isha:"18:51" }, // 21
    { fajr:"05:36", zuhr:"12:19", asr:"15:50", maghrib:"17:26", isha:"18:52" }, // 22
    { fajr:"05:36", zuhr:"12:19", asr:"15:51", maghrib:"17:27", isha:"18:52" }, // 23
    { fajr:"05:36", zuhr:"12:19", asr:"15:52", maghrib:"17:28", isha:"18:53" }, // 24
    { fajr:"05:36", zuhr:"12:20", asr:"15:52", maghrib:"17:29", isha:"18:54" }, // 25
    { fajr:"05:35", zuhr:"12:20", asr:"15:53", maghrib:"17:30", isha:"18:55" }, // 26
    { fajr:"05:35", zuhr:"12:20", asr:"15:54", maghrib:"17:31", isha:"18:56" }, // 27
    { fajr:"05:34", zuhr:"12:21", asr:"15:56", maghrib:"17:33", isha:"18:57" }, // 28
    { fajr:"05:34", zuhr:"12:21", asr:"15:57", maghrib:"17:34", isha:"18:58" }, // 29
    { fajr:"05:33", zuhr:"12:21", asr:"15:58", maghrib:"17:35", isha:"18:59" }, // 30
    { fajr:"05:33", zuhr:"12:21", asr:"15:59", maghrib:"17:36", isha:"19:00" }, // 31
  ],
  // ── FEBRUARY ──
  "02": [
    null,
    { fajr:"05:32", zuhr:"12:21", asr:"15:16", maghrib:"17:37", isha:"19:00" }, // 1
    { fajr:"05:32", zuhr:"12:21", asr:"15:16", maghrib:"17:37", isha:"19:00" }, // 2
    { fajr:"05:31", zuhr:"12:21", asr:"15:17", maghrib:"17:39", isha:"19:01" }, // 3
    { fajr:"05:31", zuhr:"12:22", asr:"15:18", maghrib:"17:40", isha:"19:02" }, // 4
    { fajr:"05:30", zuhr:"12:22", asr:"15:18", maghrib:"17:41", isha:"19:03" }, // 5
    { fajr:"05:29", zuhr:"12:22", asr:"15:19", maghrib:"17:41", isha:"19:03" }, // 6
    { fajr:"05:29", zuhr:"12:22", asr:"15:20", maghrib:"17:42", isha:"19:04" }, // 7
    { fajr:"05:28", zuhr:"12:22", asr:"15:21", maghrib:"17:43", isha:"19:05" }, // 8
    { fajr:"05:27", zuhr:"12:22", asr:"15:21", maghrib:"17:44", isha:"19:06" }, // 9
    { fajr:"05:27", zuhr:"12:22", asr:"15:22", maghrib:"17:45", isha:"19:06" }, // 10
    { fajr:"05:26", zuhr:"12:22", asr:"15:23", maghrib:"17:45", isha:"19:07" }, // 11
    { fajr:"05:25", zuhr:"12:22", asr:"15:24", maghrib:"17:46", isha:"19:08" }, // 12
    { fajr:"05:25", zuhr:"12:22", asr:"15:25", maghrib:"17:47", isha:"19:09" }, // 13
    { fajr:"05:24", zuhr:"12:22", asr:"15:25", maghrib:"17:47", isha:"19:09" }, // 14
    { fajr:"05:23", zuhr:"12:22", asr:"15:26", maghrib:"17:48", isha:"19:10" }, // 15
    { fajr:"05:22", zuhr:"12:22", asr:"15:27", maghrib:"17:49", isha:"19:11" }, // 16
    { fajr:"05:21", zuhr:"12:22", asr:"15:28", maghrib:"17:50", isha:"19:12" }, // 17
    { fajr:"05:20", zuhr:"12:22", asr:"15:28", maghrib:"17:51", isha:"19:12" }, // 18
    { fajr:"05:20", zuhr:"12:21", asr:"15:29", maghrib:"17:52", isha:"19:13" }, // 19
    { fajr:"05:19", zuhr:"12:21", asr:"15:30", maghrib:"17:52", isha:"19:14" }, // 20
    { fajr:"05:18", zuhr:"12:21", asr:"15:30", maghrib:"17:53", isha:"19:15" }, // 21
    { fajr:"05:17", zuhr:"12:21", asr:"15:31", maghrib:"17:54", isha:"19:15" }, // 22
    { fajr:"05:16", zuhr:"12:21", asr:"15:32", maghrib:"17:55", isha:"19:16" }, // 23
    { fajr:"05:15", zuhr:"12:21", asr:"15:32", maghrib:"17:56", isha:"19:17" }, // 24
    { fajr:"05:14", zuhr:"12:21", asr:"15:33", maghrib:"17:56", isha:"19:18" }, // 25
    { fajr:"05:13", zuhr:"12:21", asr:"15:34", maghrib:"17:57", isha:"19:18" }, // 26
    { fajr:"05:12", zuhr:"12:20", asr:"15:35", maghrib:"17:58", isha:"19:19" }, // 27
    { fajr:"05:11", zuhr:"12:20", asr:"15:35", maghrib:"17:59", isha:"19:20" }, // 28
    { fajr:"05:09", zuhr:"12:20", asr:"15:36", maghrib:"18:00", isha:"19:21" }, // 29
  ],
  // ── MARCH ──
  "03": [
    null,
    { fajr:"04:31", zuhr:"12:20", asr:"15:32", maghrib:"18:00", isha:"19:21" }, // 1
    { fajr:"04:31", zuhr:"12:20", asr:"15:32", maghrib:"18:01", isha:"19:22" }, // 2
    { fajr:"04:30", zuhr:"12:20", asr:"15:33", maghrib:"18:02", isha:"19:23" }, // 3
    { fajr:"04:29", zuhr:"12:19", asr:"15:33", maghrib:"18:03", isha:"19:23" }, // 4
    { fajr:"04:28", zuhr:"12:19", asr:"15:34", maghrib:"18:04", isha:"19:24" }, // 5
    { fajr:"04:27", zuhr:"12:19", asr:"15:34", maghrib:"18:04", isha:"19:25" }, // 6
    { fajr:"04:26", zuhr:"12:19", asr:"15:35", maghrib:"18:05", isha:"19:26" }, // 7
    { fajr:"04:24", zuhr:"12:19", asr:"15:35", maghrib:"18:06", isha:"19:27" }, // 8
    { fajr:"04:23", zuhr:"12:18", asr:"15:35", maghrib:"18:06", isha:"19:27" }, // 9
    { fajr:"04:22", zuhr:"12:18", asr:"15:36", maghrib:"18:07", isha:"19:28" }, // 10
    { fajr:"04:21", zuhr:"12:18", asr:"15:36", maghrib:"18:08", isha:"19:29" }, // 11
    { fajr:"04:20", zuhr:"12:18", asr:"15:36", maghrib:"18:08", isha:"19:30" }, // 12
    { fajr:"04:19", zuhr:"12:17", asr:"15:37", maghrib:"18:09", isha:"19:30" }, // 13
    { fajr:"04:18", zuhr:"12:17", asr:"15:37", maghrib:"18:10", isha:"19:31" }, // 14
    { fajr:"04:17", zuhr:"12:17", asr:"15:37", maghrib:"18:11", isha:"19:32" }, // 15
    { fajr:"04:16", zuhr:"12:16", asr:"15:37", maghrib:"18:11", isha:"19:33" }, // 16
    { fajr:"04:14", zuhr:"12:16", asr:"15:38", maghrib:"18:12", isha:"19:33" }, // 17
    { fajr:"04:13", zuhr:"12:16", asr:"15:38", maghrib:"18:13", isha:"19:34" }, // 18
    { fajr:"04:12", zuhr:"12:16", asr:"15:38", maghrib:"18:13", isha:"19:35" }, // 19
    { fajr:"04:11", zuhr:"12:15", asr:"15:38", maghrib:"18:14", isha:"19:36" }, // 20
    { fajr:"04:10", zuhr:"12:15", asr:"15:38", maghrib:"18:15", isha:"19:37" }, // 21
    { fajr:"04:09", zuhr:"12:15", asr:"15:38", maghrib:"18:15", isha:"19:37" }, // 22
    { fajr:"04:08", zuhr:"12:14", asr:"15:38", maghrib:"18:16", isha:"19:38" }, // 23
    { fajr:"04:07", zuhr:"12:14", asr:"15:38", maghrib:"18:17", isha:"19:39" }, // 24
    { fajr:"04:06", zuhr:"12:14", asr:"15:38", maghrib:"18:17", isha:"19:40" }, // 25
    { fajr:"04:04", zuhr:"12:13", asr:"15:38", maghrib:"18:18", isha:"19:40" }, // 26
    { fajr:"04:03", zuhr:"12:13", asr:"15:38", maghrib:"18:19", isha:"19:41" }, // 27
    { fajr:"04:02", zuhr:"12:13", asr:"15:38", maghrib:"18:19", isha:"19:42" }, // 28
    { fajr:"04:01", zuhr:"12:12", asr:"15:38", maghrib:"18:20", isha:"19:43" }, // 29
    { fajr:"03:59", zuhr:"12:12", asr:"15:38", maghrib:"18:21", isha:"19:43" }, // 30
    { fajr:"03:58", zuhr:"12:12", asr:"15:38", maghrib:"18:21", isha:"19:43" }, // 31
  ],
  // ── APRIL ──
  "04": [
    null,
    { fajr:"03:57", zuhr:"12:12", asr:"15:39", maghrib:"18:22", isha:"19:44" }, // 1
    { fajr:"03:56", zuhr:"12:11", asr:"15:39", maghrib:"18:22", isha:"19:45" }, // 2
    { fajr:"03:55", zuhr:"12:11", asr:"15:39", maghrib:"18:23", isha:"19:46" }, // 3
    { fajr:"03:54", zuhr:"12:11", asr:"15:39", maghrib:"18:23", isha:"19:46" }, // 4
    { fajr:"03:53", zuhr:"12:11", asr:"15:39", maghrib:"18:24", isha:"19:47" }, // 5
    { fajr:"03:52", zuhr:"12:10", asr:"15:39", maghrib:"18:24", isha:"19:47" }, // 6
    { fajr:"03:51", zuhr:"12:10", asr:"15:39", maghrib:"18:25", isha:"19:48" }, // 7
    { fajr:"03:50", zuhr:"12:10", asr:"15:39", maghrib:"18:25", isha:"19:49" }, // 8
    { fajr:"03:49", zuhr:"12:10", asr:"15:39", maghrib:"18:26", isha:"19:50" }, // 9
    { fajr:"03:48", zuhr:"12:09", asr:"15:39", maghrib:"18:26", isha:"19:51" }, // 10
    { fajr:"03:47", zuhr:"12:09", asr:"15:39", maghrib:"18:27", isha:"19:51" }, // 11
    { fajr:"03:46", zuhr:"12:09", asr:"15:39", maghrib:"18:27", isha:"19:52" }, // 12
    { fajr:"03:45", zuhr:"12:09", asr:"15:39", maghrib:"18:28", isha:"19:53" }, // 13
    { fajr:"03:44", zuhr:"12:08", asr:"15:39", maghrib:"18:28", isha:"19:54" }, // 14
    { fajr:"03:43", zuhr:"12:08", asr:"15:39", maghrib:"18:29", isha:"19:55" }, // 15
    { fajr:"03:42", zuhr:"12:08", asr:"15:39", maghrib:"18:29", isha:"19:56" }, // 16
    { fajr:"03:41", zuhr:"12:08", asr:"15:39", maghrib:"18:30", isha:"19:57" }, // 17
    { fajr:"03:40", zuhr:"12:07", asr:"15:39", maghrib:"18:30", isha:"19:57" }, // 18
    { fajr:"03:39", zuhr:"12:07", asr:"15:39", maghrib:"18:31", isha:"19:58" }, // 19
    { fajr:"03:38", zuhr:"12:07", asr:"15:39", maghrib:"18:31", isha:"19:59" }, // 20
    { fajr:"03:37", zuhr:"12:07", asr:"15:39", maghrib:"18:32", isha:"20:00" }, // 21
    { fajr:"03:36", zuhr:"12:06", asr:"15:39", maghrib:"18:32", isha:"20:01" }, // 22
    { fajr:"03:35", zuhr:"12:06", asr:"15:39", maghrib:"18:33", isha:"20:01" }, // 23
    { fajr:"03:34", zuhr:"12:06", asr:"15:39", maghrib:"18:33", isha:"20:02" }, // 24
    { fajr:"03:33", zuhr:"12:06", asr:"15:39", maghrib:"18:34", isha:"20:03" }, // 25
    { fajr:"03:32", zuhr:"12:05", asr:"15:39", maghrib:"18:34", isha:"20:04" }, // 26
    { fajr:"03:31", zuhr:"12:05", asr:"15:39", maghrib:"18:35", isha:"20:05" }, // 27
    { fajr:"03:30", zuhr:"12:05", asr:"15:39", maghrib:"18:35", isha:"20:06" }, // 28
    { fajr:"03:29", zuhr:"12:05", asr:"15:39", maghrib:"18:36", isha:"20:07" }, // 29
    { fajr:"03:28", zuhr:"12:05", asr:"15:39", maghrib:"18:36", isha:"20:08" }, // 30
  ],
  // ── MAY ──
  "05": [
    null,
    { fajr:"03:27", zuhr:"12:05", asr:"15:39", maghrib:"18:37", isha:"20:09" }, // 1
    { fajr:"03:26", zuhr:"12:05", asr:"15:39", maghrib:"18:37", isha:"20:10" }, // 2
    { fajr:"03:25", zuhr:"12:05", asr:"15:39", maghrib:"18:38", isha:"20:11" }, // 3
    { fajr:"03:24", zuhr:"12:04", asr:"15:39", maghrib:"18:38", isha:"20:12" }, // 4
    { fajr:"03:23", zuhr:"12:04", asr:"15:39", maghrib:"18:39", isha:"20:13" }, // 5
    { fajr:"03:22", zuhr:"12:04", asr:"15:39", maghrib:"18:39", isha:"20:14" }, // 6
    { fajr:"03:21", zuhr:"12:04", asr:"15:39", maghrib:"18:40", isha:"20:15" }, // 7
    { fajr:"03:20", zuhr:"12:04", asr:"15:39", maghrib:"18:40", isha:"20:16" }, // 8
    { fajr:"03:19", zuhr:"12:04", asr:"15:39", maghrib:"18:41", isha:"20:17" }, // 9
    { fajr:"03:18", zuhr:"12:04", asr:"15:39", maghrib:"18:41", isha:"20:18" }, // 10
    { fajr:"03:17", zuhr:"12:04", asr:"15:39", maghrib:"18:42", isha:"20:19" }, // 11
    { fajr:"03:16", zuhr:"12:04", asr:"15:39", maghrib:"18:42", isha:"20:20" }, // 12
    { fajr:"03:15", zuhr:"12:04", asr:"15:39", maghrib:"18:43", isha:"20:21" }, // 13
    { fajr:"03:15", zuhr:"12:04", asr:"15:39", maghrib:"18:43", isha:"20:22" }, // 14
    { fajr:"03:14", zuhr:"12:04", asr:"15:39", maghrib:"18:44", isha:"20:23" }, // 15
    { fajr:"03:13", zuhr:"12:04", asr:"15:39", maghrib:"18:44", isha:"20:24" }, // 16
    { fajr:"03:12", zuhr:"12:04", asr:"15:39", maghrib:"18:45", isha:"20:25" }, // 17
    { fajr:"03:11", zuhr:"12:04", asr:"15:39", maghrib:"18:45", isha:"20:26" }, // 18
    { fajr:"03:10", zuhr:"12:04", asr:"15:39", maghrib:"18:46", isha:"20:27" }, // 19
    { fajr:"03:09", zuhr:"12:04", asr:"15:39", maghrib:"18:46", isha:"20:28" }, // 20
    { fajr:"03:09", zuhr:"12:04", asr:"15:39", maghrib:"18:47", isha:"20:29" }, // 21
    { fajr:"03:08", zuhr:"12:04", asr:"15:39", maghrib:"18:47", isha:"20:29" }, // 22
    { fajr:"03:07", zuhr:"12:04", asr:"15:39", maghrib:"18:48", isha:"20:30" }, // 23
    { fajr:"03:06", zuhr:"12:04", asr:"15:39", maghrib:"18:48", isha:"20:31" }, // 24
    { fajr:"03:05", zuhr:"12:04", asr:"15:39", maghrib:"18:49", isha:"20:32" }, // 25
    { fajr:"03:05", zuhr:"12:04", asr:"15:39", maghrib:"18:49", isha:"20:33" }, // 26
    { fajr:"03:04", zuhr:"12:05", asr:"15:39", maghrib:"18:50", isha:"20:34" }, // 27
    { fajr:"03:04", zuhr:"12:05", asr:"15:40", maghrib:"18:50", isha:"20:35" }, // 28
    { fajr:"03:03", zuhr:"12:05", asr:"15:40", maghrib:"18:51", isha:"20:36" }, // 29
    { fajr:"03:02", zuhr:"12:05", asr:"15:40", maghrib:"18:51", isha:"20:37" }, // 30
    { fajr:"03:02", zuhr:"12:05", asr:"15:40", maghrib:"18:52", isha:"20:38" }, // 31
  ],
  // ── JUNE ──
  "06": [
    null,
    { fajr:"03:21", zuhr:"12:05", asr:"15:40", maghrib:"18:52", isha:"20:40" }, // 1
    { fajr:"03:21", zuhr:"12:06", asr:"15:40", maghrib:"18:53", isha:"20:41" }, // 2
    { fajr:"03:21", zuhr:"12:06", asr:"15:40", maghrib:"18:53", isha:"20:41" }, // 3
    { fajr:"03:20", zuhr:"12:06", asr:"15:40", maghrib:"18:54", isha:"20:42" }, // 4
    { fajr:"03:20", zuhr:"12:06", asr:"15:41", maghrib:"18:54", isha:"20:43" }, // 5
    { fajr:"03:19", zuhr:"12:06", asr:"15:41", maghrib:"18:55", isha:"20:43" }, // 6
    { fajr:"03:19", zuhr:"12:06", asr:"15:41", maghrib:"18:55", isha:"20:43" }, // 7
    { fajr:"03:19", zuhr:"12:07", asr:"15:41", maghrib:"18:56", isha:"20:44" }, // 8
    { fajr:"03:19", zuhr:"12:07", asr:"15:41", maghrib:"18:56", isha:"20:45" }, // 9
    { fajr:"03:18", zuhr:"12:07", asr:"15:41", maghrib:"18:57", isha:"20:45" }, // 10
    { fajr:"03:18", zuhr:"12:07", asr:"15:41", maghrib:"18:57", isha:"20:46" }, // 11
    { fajr:"03:18", zuhr:"12:07", asr:"15:41", maghrib:"18:57", isha:"20:46" }, // 12
    { fajr:"03:18", zuhr:"12:07", asr:"15:42", maghrib:"18:58", isha:"20:47" }, // 13
    { fajr:"03:18", zuhr:"12:08", asr:"15:42", maghrib:"18:58", isha:"20:47" }, // 14
    { fajr:"03:18", zuhr:"12:08", asr:"15:42", maghrib:"18:58", isha:"20:48" }, // 15
    { fajr:"03:18", zuhr:"12:08", asr:"15:42", maghrib:"18:59", isha:"20:48" }, // 16
    { fajr:"03:18", zuhr:"12:08", asr:"15:42", maghrib:"18:59", isha:"20:49" }, // 17
    { fajr:"03:18", zuhr:"12:09", asr:"15:42", maghrib:"18:59", isha:"20:49" }, // 18
    { fajr:"03:18", zuhr:"12:09", asr:"15:43", maghrib:"19:00", isha:"20:50" }, // 19
    { fajr:"03:18", zuhr:"12:09", asr:"15:43", maghrib:"19:00", isha:"20:50" }, // 20
    { fajr:"03:19", zuhr:"12:09", asr:"15:44", maghrib:"19:00", isha:"20:50" }, // 21
    { fajr:"03:19", zuhr:"12:10", asr:"15:44", maghrib:"19:00", isha:"20:50" }, // 22
    { fajr:"03:19", zuhr:"12:10", asr:"15:44", maghrib:"19:01", isha:"20:50" }, // 23
    { fajr:"03:19", zuhr:"12:10", asr:"15:44", maghrib:"19:01", isha:"20:51" }, // 24
    { fajr:"03:20", zuhr:"12:10", asr:"15:44", maghrib:"19:01", isha:"20:51" }, // 25
    { fajr:"03:20", zuhr:"12:10", asr:"15:45", maghrib:"19:01", isha:"20:51" }, // 26
    { fajr:"03:20", zuhr:"12:11", asr:"15:45", maghrib:"19:01", isha:"20:51" }, // 27
    { fajr:"03:21", zuhr:"12:11", asr:"15:45", maghrib:"19:02", isha:"20:51" }, // 28
    { fajr:"03:21", zuhr:"12:11", asr:"15:45", maghrib:"19:02", isha:"20:51" }, // 29
    { fajr:"03:22", zuhr:"12:11", asr:"15:46", maghrib:"19:02", isha:"20:51" }, // 30
  ],
  // ── JULY ──
  "07": [
    null,
    { fajr:"03:22", zuhr:"12:11", asr:"15:46", maghrib:"19:02", isha:"20:50" }, // 1
    { fajr:"03:23", zuhr:"12:12", asr:"15:46", maghrib:"19:02", isha:"20:50" }, // 2
    { fajr:"03:23", zuhr:"12:12", asr:"15:46", maghrib:"19:02", isha:"20:50" }, // 3
    { fajr:"03:24", zuhr:"12:12", asr:"15:46", maghrib:"19:02", isha:"20:50" }, // 4
    { fajr:"03:24", zuhr:"12:12", asr:"15:46", maghrib:"19:02", isha:"20:50" }, // 5
    { fajr:"03:25", zuhr:"12:12", asr:"15:47", maghrib:"19:02", isha:"20:50" }, // 6
    { fajr:"03:26", zuhr:"12:12", asr:"15:47", maghrib:"19:02", isha:"20:49" }, // 7
    { fajr:"03:26", zuhr:"12:12", asr:"15:47", maghrib:"19:01", isha:"20:49" }, // 8
    { fajr:"03:27", zuhr:"12:13", asr:"15:47", maghrib:"19:01", isha:"20:49" }, // 9
    { fajr:"03:28", zuhr:"12:13", asr:"15:47", maghrib:"19:01", isha:"20:48" }, // 10
    { fajr:"03:28", zuhr:"12:13", asr:"15:47", maghrib:"19:01", isha:"20:48" }, // 11
    { fajr:"03:29", zuhr:"12:13", asr:"15:48", maghrib:"19:01", isha:"20:47" }, // 12
    { fajr:"03:30", zuhr:"12:13", asr:"15:48", maghrib:"19:00", isha:"20:47" }, // 13
    { fajr:"03:31", zuhr:"12:13", asr:"15:48", maghrib:"19:00", isha:"20:46" }, // 14
    { fajr:"03:32", zuhr:"12:14", asr:"15:48", maghrib:"19:00", isha:"20:45" }, // 15
    { fajr:"03:32", zuhr:"12:14", asr:"15:48", maghrib:"19:00", isha:"20:45" }, // 16
    { fajr:"03:33", zuhr:"12:14", asr:"15:48", maghrib:"18:59", isha:"20:44" }, // 17
    { fajr:"03:34", zuhr:"12:14", asr:"15:48", maghrib:"18:59", isha:"20:43" }, // 18
    { fajr:"03:35", zuhr:"12:14", asr:"15:49", maghrib:"18:59", isha:"20:42" }, // 19
    { fajr:"03:36", zuhr:"12:14", asr:"15:49", maghrib:"18:58", isha:"20:41" }, // 20
    { fajr:"03:37", zuhr:"12:14", asr:"15:49", maghrib:"18:58", isha:"20:40" }, // 21
    { fajr:"03:37", zuhr:"12:14", asr:"15:49", maghrib:"18:57", isha:"20:40" }, // 22
    { fajr:"03:38", zuhr:"12:14", asr:"15:49", maghrib:"18:57", isha:"20:39" }, // 23
    { fajr:"03:39", zuhr:"12:14", asr:"15:49", maghrib:"18:56", isha:"20:38" }, // 24
    { fajr:"03:40", zuhr:"12:14", asr:"15:49", maghrib:"18:56", isha:"20:37" }, // 25
    { fajr:"03:41", zuhr:"12:14", asr:"15:49", maghrib:"18:55", isha:"20:36" }, // 26
    { fajr:"03:42", zuhr:"12:14", asr:"15:49", maghrib:"18:55", isha:"20:35" }, // 27
    { fajr:"03:43", zuhr:"12:14", asr:"15:49", maghrib:"18:54", isha:"20:34" }, // 28
    { fajr:"03:44", zuhr:"12:14", asr:"15:49", maghrib:"18:54", isha:"20:33" }, // 29
    { fajr:"03:45", zuhr:"12:14", asr:"15:49", maghrib:"18:53", isha:"20:32" }, // 30
    { fajr:"03:46", zuhr:"12:14", asr:"15:49", maghrib:"18:52", isha:"20:32" }, // 31
  ],
  // ── AUGUST ──
  "08": [
    null,
    { fajr:"03:46", zuhr:"12:14", asr:"15:49", maghrib:"18:59", isha:"20:31" }, // 1
    { fajr:"03:47", zuhr:"12:14", asr:"15:48", maghrib:"18:58", isha:"20:30" }, // 2
    { fajr:"03:48", zuhr:"12:14", asr:"15:48", maghrib:"18:57", isha:"20:29" }, // 3
    { fajr:"03:49", zuhr:"12:14", asr:"15:48", maghrib:"18:57", isha:"20:27" }, // 4
    { fajr:"03:50", zuhr:"12:14", asr:"15:48", maghrib:"18:56", isha:"20:26" }, // 5
    { fajr:"03:51", zuhr:"12:14", asr:"15:48", maghrib:"18:55", isha:"20:25" }, // 6
    { fajr:"03:52", zuhr:"12:13", asr:"15:48", maghrib:"18:54", isha:"20:24" }, // 7
    { fajr:"03:53", zuhr:"12:13", asr:"15:48", maghrib:"18:53", isha:"20:23" }, // 8
    { fajr:"03:54", zuhr:"12:13", asr:"15:47", maghrib:"18:52", isha:"20:22" }, // 9
    { fajr:"03:55", zuhr:"12:13", asr:"15:47", maghrib:"18:51", isha:"20:20" }, // 10
    { fajr:"03:56", zuhr:"12:13", asr:"15:47", maghrib:"18:50", isha:"20:19" }, // 11
    { fajr:"03:57", zuhr:"12:13", asr:"15:47", maghrib:"18:49", isha:"20:18" }, // 12
    { fajr:"03:58", zuhr:"12:13", asr:"15:46", maghrib:"18:48", isha:"20:17" }, // 13
    { fajr:"03:59", zuhr:"12:12", asr:"15:46", maghrib:"18:47", isha:"20:15" }, // 14
    { fajr:"04:00", zuhr:"12:12", asr:"15:46", maghrib:"18:46", isha:"20:14" }, // 15
    { fajr:"04:01", zuhr:"12:12", asr:"15:45", maghrib:"18:45", isha:"20:13" }, // 16
    { fajr:"04:02", zuhr:"12:12", asr:"15:45", maghrib:"18:44", isha:"20:12" }, // 17
    { fajr:"04:03", zuhr:"12:11", asr:"15:44", maghrib:"18:43", isha:"20:10" }, // 18
    { fajr:"04:04", zuhr:"12:11", asr:"15:44", maghrib:"18:42", isha:"20:09" }, // 19
    { fajr:"04:05", zuhr:"12:11", asr:"15:43", maghrib:"18:41", isha:"20:08" }, // 20
    { fajr:"04:06", zuhr:"12:11", asr:"15:43", maghrib:"18:40", isha:"20:06" }, // 21
    { fajr:"04:07", zuhr:"12:10", asr:"15:43", maghrib:"18:39", isha:"20:05" }, // 22
    { fajr:"04:08", zuhr:"12:10", asr:"15:43", maghrib:"18:38", isha:"20:03" }, // 23
    { fajr:"04:09", zuhr:"12:10", asr:"15:42", maghrib:"18:37", isha:"20:02" }, // 24
    { fajr:"04:10", zuhr:"12:09", asr:"15:42", maghrib:"18:35", isha:"20:01" }, // 25
    { fajr:"04:11", zuhr:"12:09", asr:"15:41", maghrib:"18:34", isha:"19:59" }, // 26
    { fajr:"04:12", zuhr:"12:09", asr:"15:41", maghrib:"18:33", isha:"19:58" }, // 27
    { fajr:"04:13", zuhr:"12:08", asr:"15:40", maghrib:"18:32", isha:"19:56" }, // 28
    { fajr:"04:13", zuhr:"12:08", asr:"15:39", maghrib:"18:31", isha:"19:55" }, // 29
    { fajr:"04:14", zuhr:"12:08", asr:"15:39", maghrib:"18:29", isha:"19:54" }, // 30
    { fajr:"04:15", zuhr:"12:08", asr:"15:38", maghrib:"18:28", isha:"19:52" }, // 31
  ],
  // ── SEPTEMBER ──
  "09": [
    null,
    { fajr:"04:14", zuhr:"12:08", asr:"15:38", maghrib:"18:27", isha:"19:51" }, // 1
    { fajr:"04:15", zuhr:"12:07", asr:"15:37", maghrib:"18:26", isha:"19:49" }, // 2
    { fajr:"04:15", zuhr:"12:07", asr:"15:37", maghrib:"18:24", isha:"19:48" }, // 3
    { fajr:"04:16", zuhr:"12:07", asr:"15:36", maghrib:"18:23", isha:"19:47" }, // 4
    { fajr:"04:17", zuhr:"12:06", asr:"15:35", maghrib:"18:22", isha:"19:45" }, // 5
    { fajr:"04:18", zuhr:"12:06", asr:"15:35", maghrib:"18:21", isha:"19:44" }, // 6
    { fajr:"04:19", zuhr:"12:06", asr:"15:34", maghrib:"18:19", isha:"19:42" }, // 7
    { fajr:"04:19", zuhr:"12:05", asr:"15:33", maghrib:"18:18", isha:"19:41" }, // 8
    { fajr:"04:20", zuhr:"12:05", asr:"15:33", maghrib:"18:17", isha:"19:39" }, // 9
    { fajr:"04:21", zuhr:"12:05", asr:"15:33", maghrib:"18:16", isha:"19:38" }, // 10
    { fajr:"04:22", zuhr:"12:05", asr:"15:32", maghrib:"18:14", isha:"19:37" }, // 11
    { fajr:"04:22", zuhr:"12:04", asr:"15:31", maghrib:"18:13", isha:"19:35" }, // 12
    { fajr:"04:23", zuhr:"12:04", asr:"15:31", maghrib:"18:12", isha:"19:34" }, // 13
    { fajr:"04:24", zuhr:"12:04", asr:"15:30", maghrib:"18:10", isha:"19:32" }, // 14
    { fajr:"04:24", zuhr:"12:03", asr:"15:29", maghrib:"18:09", isha:"19:31" }, // 15
    { fajr:"04:25", zuhr:"12:03", asr:"15:28", maghrib:"18:08", isha:"19:29" }, // 16
    { fajr:"04:26", zuhr:"12:03", asr:"15:28", maghrib:"18:06", isha:"19:28" }, // 17
    { fajr:"04:27", zuhr:"12:02", asr:"15:27", maghrib:"18:05", isha:"19:27" }, // 18
    { fajr:"04:27", zuhr:"12:02", asr:"15:26", maghrib:"18:04", isha:"19:25" }, // 19
    { fajr:"04:28", zuhr:"12:01", asr:"15:25", maghrib:"18:03", isha:"19:24" }, // 20
    { fajr:"04:29", zuhr:"12:01", asr:"15:25", maghrib:"18:01", isha:"19:22" }, // 21
    { fajr:"04:29", zuhr:"12:01", asr:"15:24", maghrib:"18:00", isha:"19:21" }, // 22
    { fajr:"04:30", zuhr:"12:00", asr:"15:23", maghrib:"17:59", isha:"19:20" }, // 23
    { fajr:"04:31", zuhr:"12:00", asr:"15:22", maghrib:"17:57", isha:"19:18" }, // 24
    { fajr:"04:31", zuhr:"12:00", asr:"15:21", maghrib:"17:56", isha:"19:17" }, // 25
    { fajr:"04:32", zuhr:"11:59", asr:"15:20", maghrib:"17:55", isha:"19:16" }, // 26
    { fajr:"04:33", zuhr:"11:59", asr:"15:19", maghrib:"17:53", isha:"19:14" }, // 27
    { fajr:"04:33", zuhr:"11:58", asr:"15:18", maghrib:"17:52", isha:"19:13" }, // 28
    { fajr:"04:34", zuhr:"11:58", asr:"15:17", maghrib:"17:51", isha:"19:12" }, // 29
    { fajr:"04:35", zuhr:"11:58", asr:"15:16", maghrib:"17:50", isha:"19:10" }, // 30
  ],
  // ── OCTOBER ──
  "10": [
    null,
    { fajr:"04:35", zuhr:"11:57", asr:"15:15", maghrib:"17:56", isha:"19:09" }, // 1
    { fajr:"04:36", zuhr:"11:57", asr:"15:15", maghrib:"17:57", isha:"19:09" }, // 2
    { fajr:"04:37", zuhr:"11:57", asr:"15:15", maghrib:"17:57", isha:"19:08" }, // 3
    { fajr:"04:37", zuhr:"11:57", asr:"15:14", maghrib:"17:58", isha:"19:06" }, // 4
    { fajr:"04:38", zuhr:"11:56", asr:"15:13", maghrib:"17:59", isha:"19:05" }, // 5
    { fajr:"04:39", zuhr:"11:56", asr:"15:12", maghrib:"17:59", isha:"19:04" }, // 6
    { fajr:"04:39", zuhr:"11:56", asr:"15:11", maghrib:"18:00", isha:"19:03" }, // 7
    { fajr:"04:40", zuhr:"11:56", asr:"15:10", maghrib:"18:01", isha:"19:01" }, // 8
    { fajr:"04:40", zuhr:"11:55", asr:"15:10", maghrib:"18:01", isha:"19:00" }, // 9
    { fajr:"04:41", zuhr:"11:55", asr:"15:09", maghrib:"18:02", isha:"18:59" }, // 10
    { fajr:"04:42", zuhr:"11:55", asr:"15:08", maghrib:"18:03", isha:"18:58" }, // 11
    { fajr:"04:42", zuhr:"11:54", asr:"15:07", maghrib:"18:03", isha:"18:57" }, // 12
    { fajr:"04:43", zuhr:"11:54", asr:"15:06", maghrib:"18:04", isha:"18:55" }, // 13
    { fajr:"04:44", zuhr:"11:54", asr:"15:05", maghrib:"18:05", isha:"18:54" }, // 14
    { fajr:"04:44", zuhr:"11:54", asr:"15:04", maghrib:"18:05", isha:"18:53" }, // 15
    { fajr:"04:45", zuhr:"11:53", asr:"15:04", maghrib:"18:06", isha:"18:52" }, // 16
    { fajr:"04:46", zuhr:"11:53", asr:"15:03", maghrib:"18:07", isha:"18:51" }, // 17
    { fajr:"04:46", zuhr:"11:53", asr:"15:02", maghrib:"18:08", isha:"18:50" }, // 18
    { fajr:"04:47", zuhr:"11:53", asr:"15:01", maghrib:"18:08", isha:"18:49" }, // 19
    { fajr:"04:48", zuhr:"11:52", asr:"15:00", maghrib:"18:09", isha:"18:48" }, // 20
    { fajr:"04:48", zuhr:"11:52", asr:"15:00", maghrib:"18:10", isha:"18:47" }, // 21
    { fajr:"04:49", zuhr:"11:52", asr:"14:59", maghrib:"18:10", isha:"18:46" }, // 22
    { fajr:"04:50", zuhr:"11:52", asr:"14:58", maghrib:"18:11", isha:"18:45" }, // 23
    { fajr:"04:50", zuhr:"11:52", asr:"14:57", maghrib:"18:12", isha:"18:44" }, // 24
    { fajr:"04:51", zuhr:"11:52", asr:"14:57", maghrib:"18:13", isha:"18:43" }, // 25
    { fajr:"04:52", zuhr:"11:52", asr:"14:56", maghrib:"18:13", isha:"18:42" }, // 26
    { fajr:"04:52", zuhr:"11:52", asr:"14:55", maghrib:"18:14", isha:"18:41" }, // 27
    { fajr:"04:53", zuhr:"11:51", asr:"14:54", maghrib:"18:15", isha:"18:40" }, // 28
    { fajr:"04:54", zuhr:"11:51", asr:"14:53", maghrib:"18:16", isha:"18:39" }, // 29
    { fajr:"04:55", zuhr:"11:51", asr:"14:52", maghrib:"18:17", isha:"18:38" }, // 30
    { fajr:"04:55", zuhr:"11:51", asr:"14:51", maghrib:"18:17", isha:"18:37" }, // 31
  ],
  // ── NOVEMBER ──
  "11": [
    null,
    { fajr:"04:56", zuhr:"11:51", asr:"14:51", maghrib:"18:18", isha:"18:36" }, // 1
    { fajr:"04:57", zuhr:"11:51", asr:"14:50", maghrib:"18:19", isha:"18:36" }, // 2
    { fajr:"04:57", zuhr:"11:51", asr:"14:50", maghrib:"18:20", isha:"18:35" }, // 3
    { fajr:"04:58", zuhr:"11:51", asr:"14:49", maghrib:"18:21", isha:"18:35" }, // 4
    { fajr:"04:59", zuhr:"11:51", asr:"14:48", maghrib:"18:22", isha:"18:34" }, // 5
    { fajr:"05:00", zuhr:"11:51", asr:"14:48", maghrib:"18:22", isha:"18:33" }, // 6
    { fajr:"05:00", zuhr:"11:51", asr:"14:47", maghrib:"18:23", isha:"18:33" }, // 7
    { fajr:"05:01", zuhr:"11:51", asr:"14:47", maghrib:"18:24", isha:"18:32" }, // 8
    { fajr:"05:02", zuhr:"11:51", asr:"14:46", maghrib:"18:25", isha:"18:32" }, // 9
    { fajr:"05:02", zuhr:"11:52", asr:"14:46", maghrib:"18:26", isha:"18:31" }, // 10
    { fajr:"05:03", zuhr:"11:52", asr:"14:45", maghrib:"18:27", isha:"18:30" }, // 11
    { fajr:"05:04", zuhr:"11:52", asr:"14:45", maghrib:"18:27", isha:"18:30" }, // 12
    { fajr:"05:05", zuhr:"11:52", asr:"14:44", maghrib:"18:28", isha:"18:29" }, // 13
    { fajr:"05:05", zuhr:"11:52", asr:"14:44", maghrib:"18:29", isha:"18:29" }, // 14
    { fajr:"05:06", zuhr:"11:52", asr:"14:43", maghrib:"18:30", isha:"18:28" }, // 15
    { fajr:"05:07", zuhr:"11:52", asr:"14:43", maghrib:"18:31", isha:"18:28" }, // 16
    { fajr:"05:08", zuhr:"11:53", asr:"14:43", maghrib:"18:32", isha:"18:27" }, // 17
    { fajr:"05:08", zuhr:"11:53", asr:"14:42", maghrib:"18:33", isha:"18:27" }, // 18
    { fajr:"05:09", zuhr:"11:53", asr:"14:42", maghrib:"18:34", isha:"18:27" }, // 19
    { fajr:"05:10", zuhr:"11:53", asr:"14:42", maghrib:"18:34", isha:"18:26" }, // 20
    { fajr:"05:11", zuhr:"11:53", asr:"14:41", maghrib:"18:35", isha:"18:26" }, // 21
    { fajr:"05:11", zuhr:"11:54", asr:"14:41", maghrib:"18:36", isha:"18:26" }, // 22
    { fajr:"05:12", zuhr:"11:54", asr:"14:41", maghrib:"18:37", isha:"18:26" }, // 23
    { fajr:"05:13", zuhr:"11:54", asr:"14:41", maghrib:"18:38", isha:"18:25" }, // 24
    { fajr:"05:14", zuhr:"11:55", asr:"14:40", maghrib:"18:39", isha:"18:25" }, // 25
    { fajr:"05:14", zuhr:"11:55", asr:"14:40", maghrib:"18:40", isha:"18:25" }, // 26
    { fajr:"05:15", zuhr:"11:55", asr:"14:40", maghrib:"18:41", isha:"18:25" }, // 27
    { fajr:"05:16", zuhr:"11:56", asr:"14:40", maghrib:"18:42", isha:"18:25" }, // 28
    { fajr:"05:17", zuhr:"11:56", asr:"14:40", maghrib:"18:42", isha:"18:25" }, // 29
    { fajr:"05:17", zuhr:"11:56", asr:"14:40", maghrib:"18:43", isha:"18:25" }, // 30
  ],
  // ── DECEMBER ──
  "12": [
    null,
    { fajr:"05:18", zuhr:"11:57", asr:"14:40", maghrib:"18:44", isha:"18:25" }, // 1
    { fajr:"05:19", zuhr:"11:57", asr:"14:40", maghrib:"18:45", isha:"18:25" }, // 2
    { fajr:"05:19", zuhr:"11:57", asr:"14:40", maghrib:"18:46", isha:"18:25" }, // 3
    { fajr:"05:20", zuhr:"11:58", asr:"14:40", maghrib:"18:46", isha:"18:25" }, // 4
    { fajr:"05:21", zuhr:"11:58", asr:"14:40", maghrib:"18:47", isha:"18:25" }, // 5
    { fajr:"05:22", zuhr:"11:58", asr:"14:40", maghrib:"18:48", isha:"18:25" }, // 6
    { fajr:"05:22", zuhr:"11:59", asr:"14:40", maghrib:"18:49", isha:"18:25" }, // 7
    { fajr:"05:23", zuhr:"11:59", asr:"14:41", maghrib:"18:49", isha:"18:26" }, // 8
    { fajr:"05:24", zuhr:"11:59", asr:"14:41", maghrib:"18:50", isha:"18:26" }, // 9
    { fajr:"05:24", zuhr:"12:00", asr:"14:41", maghrib:"18:51", isha:"18:26" }, // 10
    { fajr:"05:25", zuhr:"12:00", asr:"14:41", maghrib:"18:52", isha:"18:26" }, // 11
    { fajr:"05:25", zuhr:"12:01", asr:"14:41", maghrib:"18:52", isha:"18:26" }, // 12
    { fajr:"05:26", zuhr:"12:01", asr:"14:41", maghrib:"18:53", isha:"18:27" }, // 13
    { fajr:"05:27", zuhr:"12:01", asr:"14:42", maghrib:"18:54", isha:"18:27" }, // 14
    { fajr:"05:27", zuhr:"12:02", asr:"14:42", maghrib:"18:54", isha:"18:27" }, // 15
    { fajr:"05:28", zuhr:"12:02", asr:"14:43", maghrib:"18:55", isha:"18:28" }, // 16
    { fajr:"05:29", zuhr:"12:03", asr:"14:43", maghrib:"18:56", isha:"18:29" }, // 17
    { fajr:"05:29", zuhr:"12:03", asr:"14:43", maghrib:"18:56", isha:"18:29" }, // 18
    { fajr:"05:30", zuhr:"12:04", asr:"14:44", maghrib:"18:57", isha:"18:29" }, // 19
    { fajr:"05:30", zuhr:"12:04", asr:"14:44", maghrib:"18:57", isha:"18:30" }, // 20
    { fajr:"05:31", zuhr:"12:05", asr:"14:45", maghrib:"18:58", isha:"18:30" }, // 21
    { fajr:"05:31", zuhr:"12:05", asr:"14:45", maghrib:"18:58", isha:"18:31" }, // 22
    { fajr:"05:32", zuhr:"12:06", asr:"14:46", maghrib:"18:59", isha:"18:31" }, // 23
    { fajr:"05:32", zuhr:"12:06", asr:"14:46", maghrib:"18:59", isha:"18:32" }, // 24
    { fajr:"05:33", zuhr:"12:07", asr:"14:47", maghrib:"19:00", isha:"18:33" }, // 25
    { fajr:"05:33", zuhr:"12:07", asr:"14:47", maghrib:"19:00", isha:"18:33" }, // 26
    { fajr:"05:34", zuhr:"12:08", asr:"14:48", maghrib:"19:01", isha:"18:34" }, // 27
    { fajr:"05:34", zuhr:"12:08", asr:"14:48", maghrib:"19:01", isha:"18:34" }, // 28
    { fajr:"05:35", zuhr:"12:09", asr:"14:49", maghrib:"19:01", isha:"18:35" }, // 29
    { fajr:"05:35", zuhr:"12:09", asr:"14:50", maghrib:"19:02", isha:"18:35" }, // 30
    { fajr:"05:35", zuhr:"12:10", asr:"14:51", maghrib:"19:02", isha:"18:36" }, // 31
  ]
};

module.exports = PRAYER_CALENDAR;