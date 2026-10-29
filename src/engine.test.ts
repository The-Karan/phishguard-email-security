import {describe,it,expect} from 'vitest'; import {analyze,parseRaw} from './engine';
describe('PhishGuard analysis engine',()=>{
 it('detects a high-risk synthetic phishing message',()=>{const r=analyze({sender:'billing@example.test',replyTo:'x@evil.test',subject:'Action required',body:'Verify your password immediately at http://198.51.100.7/login',auth:'spf=fail; dkim=fail; dmarc=fail'});expect(r.score).toBe(100);expect(r.verdict).toBe('Critical');expect(r.findings.length).toBeGreaterThan(4)});
 it('does not equate unknown auth with a failure',()=>{const r=analyze({sender:'a@example.test',replyTo:'',subject:'Hi',body:'A plain message',auth:''});expect(r.score).toBe(0);expect(r.verdict).toBe('Inconclusive')});
 it('unfolds and parses common raw headers',()=>{const r=parseRaw('From: A <a@example.test>\nSubject: Hello\nAuthentication-Results: mx; spf=pass\n\nBody');expect(r.sender).toContain('a@example.test');expect(r.auth).toContain('spf=pass')});
});
