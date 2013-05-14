L.SpinMapMixin = {
    spin: function (state) {
        var state = !!state;
        if (state) {
            // start spinning !
            if (!this._spinner) {
                this._spinner = new Spinner().spin(this._container);
                this._spinning = 0;
            }
            this._spinning++;
        }
        else {
            this._spinning--;
            if (this._spinning <= 0) {
                // end spinning !
                if (this._spinner) {
                    this._spinner.stop();
                    this._spinner = null;
                }
            }
        }
    }
};

L.Map.include(L.SpinMapMixin);