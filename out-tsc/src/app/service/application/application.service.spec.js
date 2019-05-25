import { TestBed } from '@angular/core/testing';
import { ApplicationService } from './application.service';
describe('ApplicationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ApplicationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=application.service.spec.js.map