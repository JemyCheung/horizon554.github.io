(function($) {
    var sdkList = {
        "iOS": [{
            "time": "2017-10-18",
            "size": "5.7M",
            "version": "3.2.0",
            "demo": "./xdsdk_docs/iOS/V3.2.0/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.0/XDSDK-iOS-3.2.0-20171018.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.0/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        }, {
            "time": "2017-09-27",
            "size": "5.7M",
            "version": "3.1.7",
            "demo": "./xdsdk_docs/iOS/V3.1.7/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.1.7/XDSDK-iOS-3.1.7-20170927.zip",
            "doc": "./xdsdk_docs/iOS/V3.1.7/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        }, {
            "time": "2017-09-19",
            "size": "5.6M",
            "version": "3.1.6",
            "demo": "./xdsdk_docs/iOS/V3.1.6/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.1.6/XDSDK-iOS-3.1.6-20170919.zip",
            "doc": "./xdsdk_docs/iOS/V3.1.6/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        }],

        "Android": [{
            "time": "2017-10-19",
            "size": "5.2M",
            "version": "3.2.0",
            "demo": "./xdsdk_docs/Android/V3.2.0/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.0/XDSDK-Android-3.2.0.zip",
            "doc": "./xdsdk_docs/Android/V3.2.0/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        }, {
            "time": "2017-09-04",
            "size": "5.3M",
            "version": "3.1.5",
            "demo": "./xdsdk_docs/Android/V3.1.5/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.1.5/XDSDK-Android-3.1.5.zip",
            "doc": "./xdsdk_docs/Android/V3.1.5/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        }, {
            "time": "2017-08-29",
            "size": "5.3M",
            "version": "3.1.4",
            "demo": "./xdsdk_docs/Android/V3.1.4/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.1.4/xd_doc_android.html",
            "doc": "./xdsdk_docs/Android/V3.1.4/XDSDK-Android-3.1.4.zip",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        }, ],

        "Unity3d": [{
            "time": "2017-10-20",
            "size": "10.9M",
            "version": "1.0.8",
            "demo": "./xdsdk_docs/Unity/V1.0.8/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.8/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.8/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        }, {
            "time": "2017-09-19",
            "size": "10.9M",
            "version": "1.0.7",
            "demo": "./xdsdk_docs/Unity/V1.0.7/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.7/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.7/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"

        }, {
            "time": "2017-09-14",
            "size": "10.9M",
            "version": "1.0.6",
            "demo": "./xdsdk_docs/Unity/V1.0.6/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.6/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.6/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        }, ],
    };

    for (var item in sdkList) {
        var str = "";
        for (var i in sdkList[item]) {
            str += "<tr>" +
                "<td class=\"fixtime\">" + sdkList[item][i].time + "</td>" +
                "<td>" + sdkList[item][i].size + "</td>" +
                "<td>" + sdkList[item][i].version + "</td>" +
                "<td><a href=\"" + sdkList[item][i].demo + "\"target=\"_blank\">Demo</a></td>" +
                "<td><a class=\"text-sdk\" href=\"" + sdkList[item][i].sdk + "\"target=\"_blank\">" + item + "_SDK</a></td>" +
                "<td><a href=\"" + sdkList[item][i].doc + "\"target=\"_blank\">查看文档</a></td>" +
                "<td><a href=\"" + sdkList[item][i].changeLog + "\"target=\"_blank\">changeLog</a></td>" +
                "</tr>"
        }
        $("." + item + "-wrapper tbody").append(str);
    }
    $(".pill").on("click", function() {
        if ($(this).hasClass('active')) {
            return false;
        }
        $(".pill").removeClass('active');
        $(".table-wrapper").removeClass('active')
        $(this).addClass('active');
        $($(this).data("wrap")).addClass('active');
    })
})(jQuery);