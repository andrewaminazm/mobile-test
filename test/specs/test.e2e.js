describe('Calculator Automation', () => {

    it('should perform addition', async () => {
        // Find and click number 2
        const two = await $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup[1]/com.android.calculator2.ui.widget.a[1]/android.widget.FrameLayout[1]/android.widget.Button[8]');
        await two.click();
        
        // Find and click plus (+) button
        const plus = await $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup[1]/com.android.calculator2.ui.widget.a[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[7]/android.widget.Button[1]');
        await plus.click();
        
        // Find and click number 3
        const three = await $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup[1]/com.android.calculator2.ui.widget.a[1]/android.widget.FrameLayout[1]/android.widget.Button[8]');
        await three.click();
        
        // Find and click equals (=) button
        const equals = await $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup[1]/com.android.calculator2.ui.widget.a[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[8]/android.widget.Button[1]');
        await equals.click();
        
        // Get the result from the result field
        const result = await $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]');
        const resultText = await result.getText();
        
        // Assert that the result is 5
        expect(resultText).toBe('6');
    });

});
