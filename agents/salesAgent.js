class SalesAgent {
  process(message) {
    const text = message.toLowerCase();

    if (
      text.includes("اشتري") ||
      text.includes("اطلب") ||
      text.includes("عايز") ||
      text.includes("شراء")
    ) {
      return {
        success: true,
        reply:
          "ممتاز 👍، يسعدنا خدمتك. من فضلك أرسل اسمك ورقم هاتفك والعنوان لإتمام الطلب."
      };
    }

    return {
      success: false,
      reply: null
    };
  }
}

module.exports = new SalesAgent();
