---
---
(function (d, data) {
    var mp = d.getElementsByClassName('media-partners__list')[0];
    var tags = [ "main" ];

    data.forEach(function(v, k) {
        var hd, ha, hi;

        if (v.tags) {
            var c = v.tags.filter(function(n) {
                return tags.indexOf(n) != -1;
            });

            if (!c.length) {
                return;
            }
        }

        hi = d.createElement("IMG");
        hi.setAttribute("src", "{{ site.baseurl }}/img/media-partners/" + v.img);
        hi.setAttribute("alt", v.name);

        ha = d.createElement("A");
        ha.setAttribute("href", v.url);
        ha.setAttribute("title", v.name);
        ha.appendChild(hi);

        hd = d.createElement("DIV");
        hd.setAttribute("class", "media-partner");
        hd.appendChild(ha);

        mp.appendChild(hd);
    });

})(document, {{ site.data.media_partners_2017 | sort: 'name' | jsonify }});
