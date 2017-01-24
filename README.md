# cloud-perf
Cloud Performance Platform

Cloud Performance Platform is an openresty project, provide easy ui to remote profile web service and generate svg output.

![](https://github.com/robbinfan/cloud-perf/blob/master/index.png)


Now, it provide 6 profile types:
 - CPU
 - HEAP
 - CPU FlameGraph
 - HEAP FlameGraph
 - Growth 
 - Growth FlameGraph
 
# Install

1. install openresty
2. download cloud-perf, put it under /home/cloud, extract it
3. cd cloud-perf/vendor/sockproc, run ./serverctl start
4. run openresty -p /home/cloud/cloud-perf

# Reference:

1. pprof remote servers https://gperftools.github.io/gperftools/pprof_remote_servers.html
2. Intor to cloud-perf(Only Chinese version) https://zhuanlan.zhihu.com/p/25004084

