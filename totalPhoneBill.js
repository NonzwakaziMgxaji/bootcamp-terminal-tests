module.exports = function (string) {
    // string = 'call, sms, call, sms, sms'
    var callsAndSms = string.split(",");

    let totalPhoneBill = 0;
    for (var i = 0; i < callsAndSms.length; i++) {
        var bill = callsAndSms[i].trim();
        if (bill === "call") {
            totalPhoneBill = totalPhoneBill + 2.75;
        } else if (bill === "sms") {
            totalPhoneBill = totalPhoneBill + 0.65;
        }
    }
    return "R" + totalPhoneBill.toFixed(2);
}